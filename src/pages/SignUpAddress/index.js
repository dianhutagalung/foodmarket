import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, TextInput, Gap, Button, Select} from '../../component';
import {useForm, showMessage} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Medan',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state) => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data Register: ', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://10.0.2.2:8000/api/register', data)
      .then((res) => {
        console.log('data success: ', res.data);
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          Axios.post('http://10.0.2.2:8000/api/user/photo', photoForUpload, {
            headers: {
              Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
              'content-Type': 'multipart/form-data',
            },
          })
            .then((resUpload) => {
              console.log('success upload: ', resUpload);
            })
            .catch((err) => {
              showMessage('Upload Photo tidak berhasil', err);
            });
        }

        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err?.response?.data?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={16} />
          <Button text="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
