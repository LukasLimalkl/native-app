import { ScrollView, StyleSheet, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';

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
      <ScrollView>
        <Title/>
        <Main/>
      </ScrollView>
    </View>
  );
}

