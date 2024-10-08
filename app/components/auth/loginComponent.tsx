import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "../../styles/globalStyles";

const LoginComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Recuperar los datos del AsyncStorage
      const storedData = await AsyncStorage.getItem("RegisterData");

      if (storedData !==null){
        const storedDataArray = JSON.parse(storedData);
        const userFound = storedDataArray .find(
            user=> user.email === email && user.password === password
        );
        if(userFound){
            navigation.navigate('dashboard');
        }else{
            window.alert('no funkó')
        }
      }

    } catch (error) {
      // Manejar cualquier error durante la recuperación de datos
      window.alert("Error. Hubo un problema al intentar iniciar sesión");
    }
  };

  return (
    <View style={GlobalStyles.container_auth}>
      <Text style={GlobalStyles.title_auth}>Iniciar Sesión</Text>
      <Image
        source={require("../../../assets/SenaLogo.png")}
        style={GlobalStyles.logo_auth}
      />
      <TextInput
        style={GlobalStyles.input_auth}
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        maxLength={25}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={GlobalStyles.input_auth}
        placeholder="Contraseña"
        maxLength={25}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={GlobalStyles.authText}>
        ¿Olvidaste tu contraseña?
        <Text style={GlobalStyles.textlink_auth}> Recuperar</Text>
      </Text>
      <Text style={GlobalStyles.authText}>
        ¿No tienes cuenta?
        <Text
          onPress={() => navigation.navigate("register")}
          style={GlobalStyles.textlink_auth}
        >
          {" "}
          Registrarme
        </Text>
      </Text>
      <TouchableOpacity onPress={handleLogin} style={GlobalStyles.auth_btn}>
        <Text style={GlobalStyles.authText_btn}> Iniciar Sesión </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;
