// Aplicar a ofertas
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import GlobalStyles from '../../styles/globalStyles'
const ApplyOffersComponent=()=> {
    return (
      // Ofertas de trabajo
      <ScrollView style={GlobalStyles.applyContainer}>
      <View style={GlobalStyles.applyContainerBox}>
        
        <View >
        <Text style={GlobalStyles.applyContainerBoxTitle}>Desarrollador React Native</Text>
        </View>
        <Text style={GlobalStyles.applyContainerBoxSubTitle}>Tech Company</Text>
        <Text style={GlobalStyles.applyContainerBoxLocation}> - Bogotá, Colombia</Text>
        <Text style={GlobalStyles.applyContainerBoxLorem}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquid quaerat. Soluta debitis minima dicta fugit eaque, hic alias perferendis odit est voluptatum, id in veritatis quibusdam modi aspernatur corrupti.</Text>
        <View style={GlobalStyles.applyContainerBoxOptions}>
        <Text style={GlobalStyles.applyContainerBoxOptionsTextSalary}> Salario: $1.300.000</Text>
        </View>
        <TouchableOpacity>
          <Text style={GlobalStyles.applyContainerBoxOptionsText_Aplicar}>Aplicar</Text>
          </TouchableOpacity>
        
      </View>
      <View style={GlobalStyles.applyContainerBox}>
        
        <View >
        <Text style={GlobalStyles.applyContainerBoxTitle}>Ingeniero de Software</Text>
        </View>
        <Text style={GlobalStyles.applyContainerBoxSubTitle}>Startup XYZ</Text>
        <Text style={GlobalStyles.applyContainerBoxLocation}> - Medellín, Colombia</Text>
        <Text style={GlobalStyles.applyContainerBoxLorem}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquid quaerat. Soluta debitis minima dicta fugit eaque, hic alias perferendis odit est voluptatum, id in veritatis quibusdam modi aspernatur corrupti.</Text>
        <View style={GlobalStyles.applyContainerBoxOptions}>
        <Text style={GlobalStyles.applyContainerBoxOptionsTextSalary}> Salario: $1.800.000</Text>
        </View>
        <TouchableOpacity>
          <Text style={GlobalStyles.applyContainerBoxOptionsText_Aplicar}>Aplicar</Text>
          </TouchableOpacity>
        
      </View>
      <View style={GlobalStyles.applyContainerBox}>
        
        <View >
        <Text style={GlobalStyles.applyContainerBoxTitle}>Diseñador UX/UI</Text>
        </View>
        <Text style={GlobalStyles.applyContainerBoxSubTitle}>Design Studio</Text>
        <Text style={GlobalStyles.applyContainerBoxLocation}> - Cali, Singapur</Text>
        <Text style={GlobalStyles.applyContainerBoxLorem}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aliquid quaerat. Soluta debitis minima dicta fugit eaque, hic alias perferendis odit est voluptatum, id in veritatis quibusdam modi aspernatur corrupti.</Text>
        <View style={GlobalStyles.applyContainerBoxOptions}>
        <Text style={GlobalStyles.applyContainerBoxOptionsTextSalary}> Salario: $10.800.000</Text>
        </View>
        <TouchableOpacity>
          <Text style={GlobalStyles.applyContainerBoxOptionsText_Aplicar}>Aplicar</Text>
          </TouchableOpacity>
        
      </View>
      </ScrollView>
    )
}

export default ApplyOffersComponent

// se toteó