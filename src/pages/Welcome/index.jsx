import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FreteCalc from '../../assets/FreteCalc.png';
import styles from './style';

export default function Welcome() {

  const navegation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image animation="flipInY" source={FreteCalc} style={styles.img} resizeMode="contain"/>
      </View>

      <Animatable.View delay={500} animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Frete Calc: Calculando, Economizando, Enviando!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity onPress={() => navegation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}