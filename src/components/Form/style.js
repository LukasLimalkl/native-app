import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    form: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 20,
        height:1000
    },

    formLabel: {
        color: '#212121',
        fontSize: 18,
        paddingLeft: 20,
    },

    formInput: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
      },

    formButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FFC107',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    formTextButton: {
        fontSize: 20,
        color: '#fff',
    },

    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },

    buttonResult: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FFC107',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 20,
        marginTop: 5,
    },
});

export default styles;
