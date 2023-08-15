import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

   container:{
      flex: 1,
      backgroundColor: '#FFC107',
   },

   containerHeader:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
   },

   containerForm:{
      flex: 1,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
   },

   title:{
      fontSize: 20,
      marginTop: 28,
   },


   input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
   },

   message:{
      fontSize: 28,
      fontWeight:'bold',
      color: '#FFF'
   },

   button:{
      position: 'absolute',
      backgroundColor: '#FFC107',
      borderRadius: 50,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
   },

   buttonText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'
   },




});

export default styles;