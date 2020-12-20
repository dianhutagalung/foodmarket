import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

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
    padding: 10,
    color: '#8D92A3',
  },
});
