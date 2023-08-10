import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './style';

/* eslint-disable */

function TruckMediaPicker({ onSelectMedia }) {
    const [selectedMedia, setSelectedMedia] = useState(null);
  
    const handleMediaSelection = (itemValue) => {
      setSelectedMedia(itemValue);
      onSelectMedia(itemValue);
    };
  
    return (
      <View>
        <TextInput
          style={styles.formInput}
          onChangeText={handleMediaSelection}
          value={selectedMedia}
          placeholder="Ex. R$500,00"
          keyboardType="numeric"
        />
      </View>
    );
  }
  



export default TruckMediaPicker;


