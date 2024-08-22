import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import GlobalStyles from '../../styles/globalStyles';

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>OFERTAS DE TRABAJO</Text>
        <TouchableOpacity>
          <View style={GlobalStyles.ViewCV}>
            <Image source={require('../../../assets/CvImage.png')} style={GlobalStyles.imgCV}/>
            <TouchableOpacity>
              <Text style={GlobalStyles.textCV} onPress={() => navigation.navigate('CV')}> Ver Mi Hoja De Vida</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={GlobalStyles.dashboardContainer}>
          <Text style={styles.header}>OFERTAS DISPONIBLES</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filtrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={jobOffers}
            renderItem={renderJobOffer}
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
    marginRight: 10,
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


// se toteó