import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './style';


export default function Login() {

  const navegation = useNavigation();


  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View  animation="fadeInUp" delay={500} style={styles.containerForm}>
        <Text style={styles.title}>Placa do seu veículo</Text>
        <TextInput placeholder="BRA2E19" style={styles.input}/>

        <TouchableOpacity onPress={() => navegation.navigate('Main')} style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}