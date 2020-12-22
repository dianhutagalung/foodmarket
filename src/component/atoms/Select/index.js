import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}>
          <Picker.Item label="Select your city" value="" />
          <Picker.Item label="Medan" value="Medan" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Semarang" value="Semarang" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  input: {
    marginTop: 6,
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    // padding: 2,
    color: '#8D92A3',
  },
});
