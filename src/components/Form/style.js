import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

   formContext: {
      flex:1,
      backgroundColor:'#ffffff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems:'center',
      paddingTop:30
   },

   form:{
    width:'100%',
   },
   
   formLabel: {
    color: '#212121',
    fontSize:18,
    paddingLeft:20,
   },

   formInput: {
    width:'90%',
    borderRadius:50,
    backgroundColor: '#f6f6f6',
    height:40,
    margin:12,
    paddingLeft:10,
   },

   formButton: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'center',
    width:'90%',
    backgroundColor:'#FF5722',
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    marginTop:30,
   },

   formTextButton: {
    fontSize:20,
    color: '#fff',
   },

   errorMessage:{
      fontSize:12,
      color:'#FF1493',
      fontWeight:'bold',
      paddingLeft:20,
    }

});

export default styles;