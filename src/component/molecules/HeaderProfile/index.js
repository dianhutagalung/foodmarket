import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {getData} from '../../../utils/storage';

const HeaderProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy);
  useEffect(() => {
    getData('userProfile').then((res) => {
      setPhoto({uri: `${res.profile_photo_url}`});
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.subtitle}>Let's get some foods</Text>
      </View>
      <Image source={photo} style={styles.profile} resizeMode={'cover'} />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  text: {},
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
