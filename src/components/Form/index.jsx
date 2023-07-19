import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ResultCalc from './ResultadoCalc';
import styles from './style';

export default function Form() {

    const [valorFrete,setValorFrete] = useState(null);
    const [combustivel,setCombustivel] = useState(null);
    const [gastos, setGastos] = useState(null);
    const [messagem, setMessage] = useState('Preencha todos os campos');
    const [calculo, setCalculo] = useState(null);
    const [textButton, setTextButton] = useState('Calcular Frete');


    const freteCalc = () => setCalculo((valorFrete - combustivel - gastos).toFixed(2));

    const freteValidator = () => {
       if(valorFrete !== 0 && combustivel !== 0){
        freteCalc();
        setValorFrete(null);
        setCombustivel(null);
        setGastos(null);
        setMessage('O valor que irá sobrar é: ');
        setTextButton('Calcular Novamente');
        return; 
       }
       setCalculo(null);
       setTextButton('Calcular');
       setMessage('Preencha todos os campos');
    };


    return(
        <View style={styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Valor total frete</Text>
            <TextInput
            style={styles.formInput}
            onChangeText={(e) => setValorFrete(e)} 
            value={valorFrete} 
            placeholder="Ex. R$ 9.500,00"
            keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Valor gasto com abestecimento</Text>
            <TextInput
            style={styles.formInput}
            onChangeText={(e) =>setCombustivel(e)}
            value={combustivel} 
            placeholder="Ex. R$3000,00"
            keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Valor de gastos da viagem</Text>
            <TextInput
            style={styles.formInput}
            onChangeText={(e) =>setGastos(e)}
            value={gastos} 
            placeholder="Ex. R$500,00"
            keyboardType="numeric"
            />
           <TouchableOpacity
            style={styles.formButton} 
            onPress={() => freteValidator()}
            title={textButton} >
                <Text style={styles.formTextButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultCalc messagem={messagem} calculo={calculo}/>
    </View>
    );
};