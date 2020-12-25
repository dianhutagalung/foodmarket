import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Number from '../Number';

const ItemValue = ({label, value, totalPrice, type}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number
          number={value}
          style={totalPrice ? styles.totalPrice : styles.value}
        />
      ) : (
        <Text style={totalPrice ? styles.totalPrice : styles.value}>
          {value}
        </Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  totalPrice: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1ABC9C',
  },
});
