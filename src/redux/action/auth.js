import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

      storeData('token', {value: token});

      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: token,
            'content-Type': 'multipart/form-data',
          },
        })
          .then((resUpload) => {
            profile.profile_photo_url = `${API_HOST.urlPhoto}${resUpload.data.data[0]}/`;
            storeData('userProfile', profile);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch((err) => {
            showMessage('Upload Photo tidak berhasil', err);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};

export const signInAction = (dataLogin, navigation) => (dispatch) => {
  setLoading(true);
  Axios.post(`${API_HOST.url}/login`, dataLogin)
    .then((res) => {
      const profile = res.data.data.user;
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      profile.profile_photo_url = `${API_HOST.urlPhoto}${res.data.data.user.profile_photo_path}`;
      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      console.log('userpro_file: ', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message);
    });
};
