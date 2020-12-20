import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  text,
  color = '#020202',
  backgroundColor = '#ffc700',
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(backgroundColor)}>
        <Text style={styles.text(color)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor) => ({
    borderRadius: 8,
    backgroundColor: backgroundColor,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
  }),
});
