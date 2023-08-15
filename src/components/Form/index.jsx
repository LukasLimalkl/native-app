import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    Keyboard,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { z } from 'zod';
import postTruck from '../../util/postTruck';
import ResultCalc from './ResultadoCalc';
import styles from './style';

const formSchema = z
    .object({
        valorFrete: z.number().positive(),
        combustivel: z.number().positive(),
        gastos: z.number().positive(),
        media: z.number().positive(),
    })
    .required();

export default function Form() {
    const [messagem, setMessage] = useState('');
    const [textButton, setTextButton] = useState('Calcular Frete');

    const { control, handleSubmit, watch, setValue, formState, reset } =
        useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
                valorFrete: 0,
                combustivel: 0,
                gastos: 0,
                media: 0,
            },
        });

    const { combustivel, gastos, valorFrete } = watch();

    const { isSubmitted, errors, isValid } = formState;

    const result = valorFrete - combustivel - gastos;

    const onSubmit = (data) => {
        setMessage('O valor que irá sobrar é: ');
        setTextButton('Calcular Novamente');

        setTextButton('Calcular');
        setMessage('Preencha todos os campos');

        postTruck({
            media: data.media,
        });
    };

    if (isValid && isSubmitted) {
        return (
            <ScrollView>
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
                <View style={styles.form}>
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

                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={() => handleSubmit(onSubmit)()}
                        title={textButton}
                    >
                        <Text style={styles.formTextButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </ScrollView>
    );
}
