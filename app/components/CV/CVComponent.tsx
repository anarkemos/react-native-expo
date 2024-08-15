


<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
=======
const CVComponent =()=> {
    return (
      <ScrollView>
        <View style={GlobalStyles.containerCV}>
            <Text style={GlobalStyles.title_auth}>Mi Hoja De Vida</Text>
          <View style={GlobalStyles.bodyTopDashboard}>
            <Image source={require('../../../assets/SenaLogo.png')} style={styles.logo_img} />
            <Text style={[GlobalStyles.textGeneral, styles.partition]}>Datos de Usuario</Text>
            <View style={styles.content}>
              <View style={styles.left}>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Nombre:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Edad:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Teléfono:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Email:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Dirección:</Text>
              </View>
              <View style={styles.right}>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Keineer Alberto</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>17</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>3222450755</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>karivera280@sena</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Engativá Bogotá D.C</Text>
              </View>
            </View>
            <Text style={[GlobalStyles.textGeneral, styles.partition]}>Perfil Laboral</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor accusantium fugit. Aut, eligendi, consequuntur aspernatur incidunt, nisi sint fugiat minima aperiam velit ea minus animi placeat laborum earum dolorem.</Text>
            <Text style={[GlobalStyles.textGeneral, styles.partition]}>Skills</Text>
            <View style={styles.content}>
              <View style={styles.left}>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Lenguaje:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Html</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Css</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>JavaScript</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Python</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>MySql</Text>
              </View>
              <View style={styles.right}>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Años:</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2 meses</Text>
                <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>1</Text>
              </View>
            </View>
            <Text style={[GlobalStyles.textGeneral, styles.partition]}>Otros</Text>
            <Text style={[styles.textGeneral, styles.labelLink]}>Sigue mi portafolio para más información</Text>
            <Text style={GlobalStyles.anchorLink}>Keineer.Portafolio.Web</Text>
          </View>
          <View style={GlobalStyles.bodyBottom}>
>>>>>>> 1fc8bb88d2f48f8dbbc07f1c18fb4048421cada9

const RegistrarInasistenciaScreen = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');

  const handleRegistrar = () => {
    if (nombre.trim() === '' || fecha.trim() === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    Alert.alert('Inasistencia Registrada', `Nombre: ${nombre}\nFecha: ${fecha}`);
    
    setNombre('');
    setFecha('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Inasistencia</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha (YYYY-MM-DD)"
        value={fecha}
        onChangeText={setFecha}
      />
      <Button
        title="Registrar"
        onPress={handleRegistrar}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default RegistrarInasistenciaScreen;
