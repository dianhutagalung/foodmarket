import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../component';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Angga Risky</Text>
          <Text style={styles.emailText}>wepanda@gmail.com</Text>
        </View>
      </View>
      <View style={styles.tabSection}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    paddingVertical: 26,
  },
  borderPhoto: {
    width: 110,
    height: 110,
    padding: 10,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  nameContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#020202',
  },
  emailText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  tabSection: {
    flex: 1,
    marginTop: 40,
  },
});
