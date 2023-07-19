import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

/* eslint-disable */
export default function ResultCalc({calculo, messagem}) {
    return(
        <View style={styles.result}>
            <Text style={styles.info}>{messagem}</Text>
            <Text style={styles.number}>{calculo}</Text>
        </View>
    );
};