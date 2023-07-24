import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import loadModels from '../../util/load-models';

function Models() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const models = await loadModels();
        setData(models.models);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.id}, {item.nome}
            </Text>
          )}
        />
      )}
    </View>
  );
}

export default Models;
