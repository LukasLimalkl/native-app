import React, { useState } from 'react';
import { Keyboard, Pressable, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native';
import ResultCalc from './ResultadoCalc';
import styles from './style';


export default function Form() {
    
    const [valorFrete,setValorFrete] = useState(null);
    const [combustivel,setCombustivel] = useState(null);
    const [gastos, setGastos] = useState(null);
    const [messagem, setMessage] = useState('');
    const [calculo, setCalculo] = useState(null);
    const [textButton, setTextButton] = useState('Calcular Frete');
    const [errorMessage, setErrorMessage] = useState('');


    const freteCalc = () => {
        const calcFormat = valorFrete.replace(',','.');
       return setCalculo((calcFormat - combustivel - gastos).toFixed(2));
    };

    const validatorCalc = () => {
        if(calculo == null){
            Vibration.vibrate();
            setErrorMessage('Campos Obrigatórios*');        }
    };

    const freteValidator = () => {
       if(valorFrete !== null && combustivel !== null){
        setErrorMessage('');
        freteCalc();
        setValorFrete(null);
        setCombustivel(null);
        setGastos(null);
        setMessage('O valor que irá sobrar é: ');
        setTextButton('Calcular Novamente');
        return; 
       }
       validatorCalc();
       setCalculo(null);
       setTextButton('Calcular');
       setMessage('Preencha todos os campos');       
    };


    

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Valor total frete</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.formInput}
            onChangeText={(e) => setValorFrete(e)} 
            value={valorFrete} 
            placeholder="Ex. R$ 9.500,00"
            keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Valor gasto com abestecimento</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.formInput}
            onChangeText={(e) =>setCombustivel(e)}
            value={combustivel} 
            placeholder="Ex. R$3000,00"
            keyboardType="numeric"
            />
            <Text style={styles.formLabel}>Valor de gastos da viagem</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
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
    </Pressable>
    );
};