// // Dashboard
// import { Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import AntDesign from '@expo/vector-icons/AntDesign';
// import GlobalStyles from '../../styles/globalStyles';


// const MainPageComponent=({navigation})=> {
//     return (
//       <View style={GlobalStyles.container_auth}>
//         <Text>Dashboard</Text>
//         <TouchableOpacity>
//         <AntDesign onPress={()=>navigation.navigate('login')} name="home" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     )
// }

// export default MainPageComponent

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles/globalStyles';
import Navigation from '../../../Navigation';

// Ejemplo de datos de ofertas
const jobOffers = [
  { id: '1', title: 'Desarrollador React Native', company: 'Tech Company', location: 'Bogotá, Colombia' },
  { id: '2', title: 'Ingeniero de Software', company: 'Startup XYZ', location: 'Medellín, Colombia' },
  { id: '3', title: 'Diseñador UX/UI', company: 'Design Studio', location: 'Cali, Colombia' },
  // Agrega más ofertas según sea necesario
];

const MainPageComponent = ({ navigation }) => {
  // Función para renderizar cada elemento de la lista
  const renderJobOffer = ({ item }) => (
    <TouchableOpacity style={styles.offerContainer} onPress={() => navigation.navigate('Apply', { jobId: item.id })}>
      <Text style={styles.offerTitle}>{item.title}</Text>
      <Text style={styles.offerDetails}>{item.company} - {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <View>

    </View>
      <Text style={styles.header}>Ofertas de Trabajo</Text>
      <TouchableOpacity>
        <Text onPress={()=> navigation.navigate('CV')}> CVComponent</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobOffers}
        renderItem={renderJobOffer}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginRight:10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  offerContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default MainPageComponent;
