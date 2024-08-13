import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../../styles/globalStyles'
import { TextInput } from 'react-native-gesture-handler'
import Navigation from '../../../Navigation'

const LoginComponent = ({ navigation }) => {
    return (
        <View style={GlobalStyles.container_auth}>
        <Text style={GlobalStyles.title_auth}>Iniciar Sesión</Text>
            <Image source={require('../../../assets/SenaLogo.png')} style={GlobalStyles.logo_auth} />
            <TextInput style={GlobalStyles.input_auth}  placeholder='Correo' keyboardType='email-address' autoCapitalize='none' maxLength={25} />
            <TextInput style={GlobalStyles.input_auth}  placeholder='Contraseña' maxLength={25} secureTextEntry={true} />
            <Text style={GlobalStyles.authText}>¿Olvidaste tu contraseña?<Text style={GlobalStyles.textlink_auth}>Recuperar</Text></Text>
            <Text style={GlobalStyles.authText}>¿No tienes cuenta?<Text onPress={()=> navigation.navigate('register')} style={GlobalStyles.textlink_auth}>Registrarme</Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('dashboard')} style={GlobalStyles.auth_btn}>
                <Text style={GlobalStyles.authText_btn}> Iniciar Sesión </Text>
            </TouchableOpacity>
        </View>
    );
};


export default LoginComponent
