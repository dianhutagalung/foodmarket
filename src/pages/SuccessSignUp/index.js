import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../component';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <View style={styles.text}>
        <Text style={styles.title}>Yeay! Completed</Text>
        <Text style={styles.subtitle}>
          Now you are able to order some foods as a self-reward
        </Text>
      </View>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    width: 199,
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
    marginTop: 6,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
