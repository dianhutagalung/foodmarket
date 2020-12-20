import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcRight} from '../../../assets';

const ItemListMenu = ({label}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <IcRight />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
});
