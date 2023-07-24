import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import loadModels from '../../util/load-models';

function Models() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const models = await loadModels();
        setData(models);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text key={item}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
}

export default Models;
