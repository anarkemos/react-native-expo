<<<<<<< HEAD


import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const asistencias = [
  { id: '1', nombre: 'Juan Trujillo', fecha: '2024-08-15' },
  { id: '2', nombre: 'María Gómez', fecha: '2024-08-15' },
  { id: '3', nombre: 'Pedro Martínez', fecha: '2024-08-15' },
  { id: '4', nombre: 'Ana Fernández', fecha: '2024-08-15' },
  { id: '5', nombre: 'Luis Rodríguez', fecha: '2024-08-15' },
=======
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GlobalStyles from '../../styles/globalStyles';
import Navigation from '../../../Navigation';
import { ScrollView } from 'react-native-gesture-handler';

// Ejemplo de datos de ofertas
const jobOffers = [
  { id: '1', title: 'Desarrollador React Native', company: 'Tech Company', location: 'Bogotá, Colombia' },
  { id: '2', title: 'Ingeniero de Software', company: 'Startup XYZ', location: 'Medellín, Colombia' },
  { id: '3', title: 'Diseñador UX/UI', company: 'Design Studio', location: 'Cali, Colombia' },
  { id: '4', title: 'Diseñador que diseñe', company: 'Ropas Diego', location: 'Cali, Singapur' },
  { id: '5', title: 'Programador re duro', company: 'Heladeria RicaLeche', location: 'Manizales, Canada' },
  { id: '6', title: 'Desarrollador Frontend', company: 'Tech Innovations', location: 'Barcelona, España' },
  { id: '7', title: 'Ingeniero de Datos', company: 'DataXperts', location: 'Buenos Aires, Argentina' },
  { id: '8', title: 'Analista de Sistemas', company: 'SoftSolutions', location: 'Santiago, Chile' },
  { id: '9', title: 'Arquitecto de Software', company: 'DevMasters', location: 'México D.F., México' },
  { id: '10', title: 'Desarrollador Backend', company: 'CodeStream', location: 'Lima, Perú' },
  { id: '11', title: 'Ingeniero de Machine Learning', company: 'AI Labs', location: 'Bogotá, Colombia' },
  { id: '12', title: 'Especialista en Ciberseguridad', company: 'SecureNet', location: 'Quito, Ecuador' },
  { id: '13', title: 'Consultor en TI', company: 'TechAdvisors', location: 'Caracas, Venezuela' }
>>>>>>> 1fc8bb88d2f48f8dbbc07f1c18fb4048421cada9
];

const AsistenciasScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.fecha}>{item.fecha}</Text>
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Lista de Asistencias 
        Ficha 2898749</Text>
      <FlatList
        data={asistencias}
        renderItem={renderItem}
=======
      <Text style={styles.header}>OFERTAS DE TRABAJO</Text>
      <TouchableOpacity>
        <View style={GlobalStyles.ViewCV}>
        <Image source={require('../../../assets/CvImage.png')} style={GlobalStyles.imgCV}/>
        <TouchableOpacity>
        <Text  style={GlobalStyles.textCV} onPress={()=> navigation.navigate('CV')}> Ver Mi Hoja De Vida</Text>
        </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={GlobalStyles.dashboardContainer}>
        <Text style={styles.header}>OFERTAS DISPONIBLES</Text>
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
>>>>>>> 1fc8bb88d2f48f8dbbc07f1c18fb4048421cada9
        keyExtractor={item => item.id}
      />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  nombre: {
    fontSize: 18,
    fontWeight: '500',
  },
  fecha: {
    fontSize: 16,
    color: '#555',
  },
});

export default AsistenciasScreen;
