import React from 'react';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FreteCalc from '../../assets/FreteCalcForm.png';
import styles from './style';


export default function Title() {
    return(
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.boxTitle}>
            <Image  source={FreteCalc} style={styles.img} resizeMode="contain"/>
        </Animatable.View>
    );
};