import { Text, View } from 'react-native';
import styles from './style';

/* eslint-disable */
export default function ResultCalc({calculo, messagem, media}) {

  

    return(
        <View style={styles.result}>
            <Text style={styles.info}>{messagem}</Text>
            <Text style={styles.number}>R${calculo}</Text>
            <Text style={styles.media}>Sua média é {media}</Text>
        </View>
    );
};