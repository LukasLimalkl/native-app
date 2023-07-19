import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello WOrd</Text>
        <Title/>
    </View>
  );
}

