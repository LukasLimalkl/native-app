import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckYear from '../../util/loadTruckYear';

function TruckYearPicker() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const truckYear = await loadTruckYear();
        setData(truckYear.ano);
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
          <SelectPicker.Item key={year.id} label={year.ano} value={year.ano} />
        ))}
      </SelectPicker>
    </View>
  );
}

export default TruckYearPicker;
