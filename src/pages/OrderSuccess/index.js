import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../component';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <IlSuccessOrder />
        <View style={styles.textContainer}>
          <Text style={styles.title}>You’ve Made Order</Text>
          <Text style={styles.subtitle}>
            Just stay at home while we are preparing your best foods
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Order Other Foods"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={10} />
          <Button
            text="View My Order"
            backgroundColor="#8D92A3"
            color="white"
            onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  container: {
    alignItems: 'center',
    paddingTop: 100,
  },
  textContainer: {
    paddingHorizontal: 73,
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
    paddingHorizontal: 80,
    marginTop: 30,
  },
});
