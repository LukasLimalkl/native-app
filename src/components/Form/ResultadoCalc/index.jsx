import { Text, View } from 'react-native';
import styles from './style';

/* eslint-disable */
export default function ResultCalc({ calculo, messagem }) {
    const resultFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(calculo);

    return (
        <View style={styles.result}>
            <Text style={styles.info}>{messagem}</Text>
            <Text style={styles.number}>{resultFormatted}</Text>
        </View>
    );
}
