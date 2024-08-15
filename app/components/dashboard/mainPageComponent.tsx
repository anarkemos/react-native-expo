

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const asistencias = [
  { id: '1', nombre: 'Juan Trujillo', fecha: '2024-08-15' },
  { id: '2', nombre: 'María Gómez', fecha: '2024-08-15' },
  { id: '3', nombre: 'Pedro Martínez', fecha: '2024-08-15' },
  { id: '4', nombre: 'Ana Fernández', fecha: '2024-08-15' },
  { id: '5', nombre: 'Luis Rodríguez', fecha: '2024-08-15' },
];

const AsistenciasScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.fecha}>{item.fecha}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Asistencias 
        Ficha 2898749</Text>
      <FlatList
        data={asistencias}
        renderItem={renderItem}
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
