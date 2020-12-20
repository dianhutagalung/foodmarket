import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Select your city" value="java" />
          <Picker.Item label="Medan" value="js" />
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
