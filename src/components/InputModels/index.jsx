import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckModel from '../../util/load-models';


function TruckModelPicker() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const truckMarc = await loadTruckModel();
        setData(truckMarc.models);
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
     <SelectPicker
        selectedValue={selectedModel}
        onValueChange={(itemValue) => setSelectedModel(itemValue)}
      >
        {data.map((year) => (
          <SelectPicker.Item key={year.id} label={year.nome} value={year.nome} />
        ))}
      </SelectPicker>
    </View>
  );
}

export default TruckModelPicker;
