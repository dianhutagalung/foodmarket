import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../component';
import {getData, showMessage, storeData, useForm} from '../../utils';
import Axios from 'axios';
import {API_HOST} from '../../config';

const EditProfile = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: '',
  });

  const onSubmit = () => {
    let resultObj = {};
    Object.keys(form).map((obj) => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/user`, resultObj, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          showMessage('Update Success', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          });
        })
        .catch((err) => {
          showMessage(
            `${err?.response?.data?.data?.message}` ||
              'Terjadi kesalahan di API Update Profile',
          );
        });
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Edit Profile"
          subTitle="Update your profile"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Full Name"
            placeholder="Type your full Name"
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House Number"
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="phoneNumber"
            placeholder="Type your phoneNumber"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
  },
});
