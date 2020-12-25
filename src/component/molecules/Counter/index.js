import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);
  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Text style={styles.OperatorCounter}>-</Text>
      </TouchableOpacity>
      <Text style={styles.textCounter}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <Text style={styles.OperatorCounter}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  OperatorCounter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    width: 26,
    height: 26,
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textCounter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
