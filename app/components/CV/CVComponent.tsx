


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
