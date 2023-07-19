import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Form() {
    return(
        <View>
          <View>
            <Text>Valor total frete</Text>
            <TextInput 
            placeholder="Ex. R$ 9.500,00"
            keyboardType="numeric"
            />
            <Text>Valor combustivel</Text>
            <TextInput/>
        </View>
        </View>
    );
};