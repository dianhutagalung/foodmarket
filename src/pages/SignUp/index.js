import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../component';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}} />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full Name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
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
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
