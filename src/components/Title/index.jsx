import React from 'react';
import { Image, View } from 'react-native';
import FreteCalc from '../../assets/FreteCalcForm.png';
import styles from './style';

export default function Title() {
    return(
        <View style={styles.boxTitle}>
            <Image  source={FreteCalc} style={styles.img} resizeMode="contain"/>
        </View>
    );
};