import { StyleSheet, View } from 'react-native';
import TruckModelPicker from './src/components/InputModels';
import TruckYearPicker from './src/components/InputYear';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop:80,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        <Title/>
        <Main/>
      </ScrollView> */}
      <TruckModelPicker/>
      <TruckYearPicker/>
    </View>
  );
}

