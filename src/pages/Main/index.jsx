import React from 'react';
import { View } from 'react-native';
import Form from '../../components/Form';
import Title from '../../components/Title';
import styles from './style';


export default function Main (){
    return(
        <View style={styles.container}>
            <Title/>
           <Form/>
        </View>
    );
}