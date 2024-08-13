import { StyleSheet } from 'react-native'

const GlobalStyles = StyleSheet.create({
// Auth View
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
        marginBottom:20,
    },
    authText_btn:{
        fontSize: 30,
        color:'white',
        height: 'auto',
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
    
// Dashboard View

    ViewCV:{
        height:500,
        backgroundColor: '#DFD3C3',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 20,
        marginBottom: 20,
    },
    dashboardContainer:{
        height:'auto',
        backgroundColor: '#DFD3C3',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 20,
        marginBottom: 20,
        paddingVertical: 10,
    },
    textCV:{
        color: '#0000ff',
        marginTop:10,
        fontSize: 25,
        fontFamily: 'sans-serif',
        textDecorationLine: 'underline',
    },
    imgCV:{
        width: '80%',
        height: '80%',
        resizeMode: 'contain',

    },


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
    containerCV : {
        display:'flex',
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
//ApplyOffer View
    applyContainer:{
        minHeight:'100%',
        width:'100%',
        backgroundColor:'#DFD3C3',
        paddingTop: 30,
        paddingHorizontal: 15,
        
    },
    applyContainerBox:{
        maxHeight:'100%',
        height:'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        borderColor:'cream',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 10,
    },
    
    
    applyContainerBoxTitle:{
        backgroundColor: 'none',
        color: '#08B208',
        fontSize: 25,
        fontWeight: 'bold',
    },
    applyContainerBoxSubTitle:{
        backgroundColor: 'none',
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold',
    },
    applyContainerBoxLocation:{
        backgroundColor: 'none',
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    applyContainerBoxLorem:{
        backgroundColor: 'none',
        fontSize:13,
        padding:8,
        textAlign:'justify',
        borderColor: '#08B208',
        borderWidth: 1.5,
        borderRadius:10,
        marginBottom: 10,
        marginTop: 10,
    },
    applyContainerBoxOptions:{
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between',
        overflow: 'scroll',
        flexDirection: 'row'
    },
    applyContainerBoxOptionsTextSalary:{
        backgroundColor: 'none',
        paddingVertical: 15,
        fontSize: 20,
        color: '#08B208',
        fontWeight: 'bold',

    },
    applyContainerBoxOptionsText_Aplicar:{
        backgroundColor: '#08B208',
        fontSize:20,
        textAlign:'center',
        paddingHorizontal: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        paddingVertical: 15,
        borderRadius: 15,
    },

})

export default GlobalStyles