import React from 'react';
import { Image, Text, View } from 'react-native';
import FreteCalc from '../../assets/FreteCalc.png';
import styles from './style';

export default function Welcome() {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={FreteCalc} style={styles.img} resizeMode="contain"/>
      </View>

      <View style={styles.containerForm}>

        <Text>Frete Calc: Calculando, Economizando, Enviando!</Text>
        <Text>Faça o login para começar</Text>

      </View>

    </View>
  );
}