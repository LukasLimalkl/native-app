import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import loadTruckYear from '../../util/loadTruckYear';
/* eslint-disable */

function TruckYearPicker({ onSelectYear }) {
  const [ano, setAno] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const truckYear = await loadTruckYear();
        setAno(truckYear.ano);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleYearSelection = (itemValue) => {
    setSelectedYear(itemValue);
    onSelectYear(itemValue); 
  };

  return (
    <View>
      <SelectPicker
        selectedValue={selectedYear}
        onValueChange={handleYearSelection}
      >
        <SelectPicker.Item label="Selecione o ano" value={null} />
        {ano.map((year) => (
          <SelectPicker.Item key={year.id} label={year.ano} value={year.ano} />
        ))}
      </SelectPicker>
    </View>
  );
}

export default TruckYearPicker;

export function processSelectedYear(selectedYear) {
  console.log(selectedYear);
  return selectedYear;
}
