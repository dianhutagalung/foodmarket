import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {Button} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlEmptyOrder />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ouch! Hungry</Text>
        <Text style={styles.subtitle}>
          Seems like you have not ordered any food yet
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
  },
  textContainer: {
    paddingHorizontal: 97,
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#020202',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
    marginTop: 30,
  },
});
