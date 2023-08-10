import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckModel from '../../util/loadTruckModel';

/* eslint-disable */


function TruckModelPicker({onSelectModel,onSelectMarca}) {
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
        const response = await fetch(`https://api-node.cyclic.app/models/${modelId}`);
        const modelsTruck =  await response.json();
        setModel(modelsTruck.models);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchModel(selectedMarca);
  }, [selectedMarca]);


  const handleMarcaSelection = (itemValue) => {
    setSelectedMarca(itemValue);
    onSelectMarca(itemValue); 
  };

  const handleModelSelection = (itemValue) => {
    setSelectedTruck(itemValue);
    onSelectModel(itemValue); 
  };

  


  return (
    <View>
     <SelectPicker
        selectedValue={selectedMarca}
        onValueChange={handleMarcaSelection}
      >
        <SelectPicker.Item label="Selecione a marca" value={null} />
        {data.map((marca) => (
          <SelectPicker.Item key={marca.id} label={marca.nome} value={marca.nome} />
        ))}
      </SelectPicker>
      <SelectPicker
        selectedValue={selectedTruck}
        onValueChange={handleModelSelection}
      >
        <SelectPicker.Item label="Selecione o modelo" value={null} />
        {model.map((modelo) => (
          <SelectPicker.Item key={modelo.id} label={modelo.nome} value={modelo.nome} />
        ))}
      </SelectPicker>  
      

    </View>
  );
}

export default TruckModelPicker;