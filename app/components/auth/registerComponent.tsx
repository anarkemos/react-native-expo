import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../../styles/globalStyles';

const RegisterComponent = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {

    if (password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden.');
      return;
    }

    // Guardar los datos en AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify({ username, password, email }));

    // Notificar al usuario que el registro fue exitoso
    Alert.alert('Usuario registrado exitosamente');

    // Navegar a la pantalla de inicio de sesión
    navigation.navigate('login');
  };

  return (
    <ScrollView>
      <View style={GlobalStyles.container_auth}>
        <Text style={GlobalStyles.title_auth}>Registro</Text>
        <Image source={require('../../../assets/SenaLogo.png')} style={GlobalStyles.logo_auth} />
        <TextInput 
          placeholder='Nombre Completo'
          maxLength={25}
          value={username}
          style={GlobalStyles.input_auth} 
          onChangeText={setUsername}
        />
        <TextInput 
          placeholder='Correo'
          keyboardType='email-address'
          autoCapitalize='none'
          maxLength={50}
          value={email}
          style={GlobalStyles.input_auth}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder='Contraseña'
          maxLength={25}
          secureTextEntry={true}
          value={password}
          style={GlobalStyles.input_auth}
          onChangeText={setPassword}
        />
        <TextInput 
          placeholder='Repetir Contraseña'
          maxLength={25}
          secureTextEntry={true}
          value={confirmPassword}
          style={GlobalStyles.input_auth}
          onChangeText={setConfirmPassword}
        />
        <Text style={GlobalStyles.authText}>
          Ya tengo cuenta
          <Text 
            onPress={() => navigation.navigate('Login')} 
            style={GlobalStyles.textlink_auth}
          >
            {' '}Ingresar
          </Text>
        </Text>
        <TouchableOpacity 
          onPress={handleRegister} 
          style={GlobalStyles.auth_btn}
        >
          <Text style={GlobalStyles.authText_btn}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterComponent;
