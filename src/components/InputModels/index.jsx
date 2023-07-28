import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckModel from '../../util/loadTruckModel';

function TruckModelPicker() {
  const [data, setData] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState(null);
  const [model, setModel] = useState([]);
  const [selectedTruck,setSelectedTruck] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const truckMarc = await loadTruckModel();
        setData(truckMarc.marca);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    
    fetchData();
  }, []);

  


  useEffect(() => {
    const fetchModel = async (modelId) => {
      try {
        const response = await fetch(`https://api-node-hxq1.vercel.app/models/${modelId}`);
        const modelsTruck =  await response.json();
        setModel(modelsTruck.models);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchModel(selectedMarca);
  }, [selectedMarca]);

  
  return (
    <View>
     <SelectPicker
        selectedValue={selectedMarca}
        onValueChange={(itemValue) => setSelectedMarca(itemValue)}
      >
        {data.map((marca) => (
          <SelectPicker.Item key={marca.id} label={marca.nome} value={marca.nome} />
        ))}
      </SelectPicker>
      <SelectPicker
        selectedValue={selectedTruck}
        onValueChange={(itemValue) => setSelectedTruck(itemValue)}
      >
        {model.map((modelo) => (
          <SelectPicker.Item key={modelo.id} label={modelo.nome} value={modelo.nome} />
        ))}
      </SelectPicker>  
      

    </View>
  );
}

export default TruckModelPicker;