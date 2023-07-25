import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckYear from '../../util/load-year';

function TruckYearPicker() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const models = await loadTruckYear();
        setData(models.ano);
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
        selectedValue={selectedModel}
        onValueChange={(itemValue) => setSelectedModel(itemValue)}
      >
        {data.map((year) => (
          <Picker.Item key={year.id} label={year.ano} value={year.ano} />
        ))}
      </Picker>
    </View>
  );
}

export default TruckYearPicker;
