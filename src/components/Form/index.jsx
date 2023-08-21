import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Keyboard,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import postTruck from '../../util/postTruck';
import ResultCalc from './ResultadoCalc';
import styles from './style';


export default function Form() {
    const [messagem, setMessage] = useState('');
    const [textButton, setTextButton] = useState('Calcular Frete');

    const { control, handleSubmit, watch, formState, reset } = useForm();

    const { combustivel, gastos, valorFrete } = watch();

    const { isSubmitted, errors, isValid } = formState;

    const result = valorFrete - combustivel - gastos;

    const onSubmit = (data) => {
        setMessage('O valor que irá sobrar é: ');
        setTextButton('Calcular Novamente');

        postTruck({
            placa: data.placa,
            media: data.media,
        });
    };

    if (isValid && isSubmitted) {
        return (
            <ScrollView  >
                <ResultCalc messagem={messagem} calculo={result} />
                <TouchableOpacity
                    style={styles.buttonResult}
                    onPress={() =>
                        reset(
                            {
                                combustivel: 0,
                                gastos: 0,
                                valorFrete: 0,
                                media: 0
                            },
                            {
                                keepIsSubmitted: false,
                            }
                        )
                    }
                    title={textButton}
                >
                    <Text style={styles.formTextButton}>{textButton}</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    return (
        <ScrollView>
            <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
                <Animatable.View  animation="fadeInUp" delay={500} style={styles.form}>
                    <Text style={styles.formLabel}>Valor total frete</Text>

                    {errors.valorFrete && (
                        <Text style={styles.errorMessage}>
                            Insira um valor válido
                        </Text>
                    )}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Ex. R$ 9.500,00"
                                keyboardType="numeric"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="valorFrete"
                    />

                    <Text style={styles.formLabel}>
                        Valor gasto com abastecimento
                    </Text>
                    {errors.combustivel && (
                        <Text style={styles.errorMessage}>
                            Insira um valor válido
                        </Text>
                    )}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Ex. R$3000,00"
                                keyboardType="numeric"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="combustivel"
                    />

                    <Text style={styles.formLabel}>Valor dos gastos com a viagem</Text>

                    {errors.gastos && (
                        <Text style={styles.errorMessage}>
                            Insira um valor válido
                        </Text>
                    )}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Ex. R$500,00"
                                keyboardType="numeric"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="gastos"
                    />
                    <Text style={styles.formLabel}>Media do caminhão</Text>

                    {errors.media && (
                        <Text style={styles.errorMessage}>
                            Insira um valor válido
                        </Text>
                    )}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Ex. 2.4"
                                keyboardType="numeric"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="media"
                    />

                    <Text style={styles.formLabel}>Placa do caminhão</Text>

                    {errors.media && (
                        <Text style={styles.errorMessage}>
                            Insira uma Placa valida
                        </Text>
                    )}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="Ex. ABC1020"
                                keyboardType="default"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="placa"
                    />

                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={() => handleSubmit(onSubmit)()}
                        title={textButton}
                    >
                        <Text style={styles.formTextButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Pressable>
        </ScrollView>
    );
}
