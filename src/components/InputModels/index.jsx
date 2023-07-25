import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
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
    <View>
     <Picker
        selectedValue={data.nome} 
        onValueChange={(itemValue) => setData({ id: data.id, nome: itemValue })}
      >
        {data.map((year) => (
          <Picker.Item key={year.id} label={year.nome} value={year.nome} />
        ))}
      </Picker>
    </View>
  );
}

export default Models;
