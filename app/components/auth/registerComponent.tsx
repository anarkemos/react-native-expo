import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { Component } from 'react'
import Navigation from '../../../Navigation'
import GlobalStyles from '../../styles/globalStyles'
const RegisterComponent=({navigation})=> {
    return (
        <View style={GlobalStyles.container_auth}>
        <Text style={GlobalStyles.title_auth}>Registro</Text>
        <Image source={require('../../../assets/SenaLogo.png')} style={GlobalStyles.logo_auth}/>
        <TextInput style={GlobalStyles.input_auth}  placeholder='Nombre Completo' maxLength={25}  />
        <TextInput style={GlobalStyles.input_auth}  placeholder='Correo' keyboardType='email-address' autoCapitalize='none' maxLength={25} />
        <TextInput style={GlobalStyles.input_auth}  placeholder='Contraseña' maxLength={25} secureTextEntry={true} />
        <TextInput style={GlobalStyles.input_auth}  placeholder='Repetir Contraseña' maxLength={25} secureTextEntry={true} />
        <TextInput style={GlobalStyles.input_auth}  placeholder='Teléfono' maxLength={10}  />
        <Text style={GlobalStyles.authText}>Ya tengo cuenta<Text onPress={()=> navigation.navigate('login')} style={GlobalStyles.textlink_auth}> Ingresar</Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')} style={GlobalStyles.auth_btn}>
            <Text style={GlobalStyles.authText_btn}> Registrarme </Text>
        </TouchableOpacity>
    </View>
    );
};

export default RegisterComponent