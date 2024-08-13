import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const GlobalStyles = StyleSheet.create({
    // Estilos de auth
    header_auth:{
        backgroundColor: '#08B208',
    },
    headerTitle_auth:{
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    },
    container_auth:{
        height:'100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        fontFamily: 'sans-serif'
    },
    title_auth:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    auth_btn:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'80%',
        height: 'auto',
        backgroundColor: '#08B208',
        padding: 5,
        textAlign:'center',
        borderRadius: 5,
        fontSize:20,
    },
    authText_btn:{
        fontSize: 30,
        color:'white',
    },
    authText:{
        fontSize:20,
        marginBottom:10,
    },
    logo_auth:{
        marginTop: 50,
    },
    input_auth:{
        width: '80%',
        height: 30,
        color: 'gray',
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        marginBottom: 10,
        fontSize: 15,
    },
    textlink_auth:{
        color: '#0000ff',
        
    },
    
    // Estilos de la Dashboard
// header
    header:{},
    headerTitle:{},
// container
    dashboardImg:{},
    ViewCV:{},
    offers:{},

// CV View
    textGeneral: {
    fontFamily: 'Sans-serif',
    fontSize: 17,
    color: '#222831',
    }, 
    anchorLink: {
        textDecorationLine: 'underline',
        color: '#3FA2F6',
        cursor: 'pointer',
    },
    bodyBottom: {
        marginTop: 'auto',
        marginBottom: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    containerDashboard: {
        flex: 1,
        alignItems: 'center',
        minHeight: '100%',
    },
    bodyTopDashboard: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20,
    },

})

export default GlobalStyles