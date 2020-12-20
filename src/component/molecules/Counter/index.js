import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  return (
    <View style={styles.counter}>
      <TouchableOpacity>
        <Text style={styles.OperatorCounter}>-</Text>
      </TouchableOpacity>
      <Text style={styles.textCounter}>14</Text>
      <TouchableOpacity>
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
