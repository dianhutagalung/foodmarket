import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../component';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('http://google.com');

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          setIsPaymentOpen(true);
          setPaymentURL(res.data.data.payment_url);
        })
        .catch((err) => {
          showMessage(err?.response?.message || 'terjadi kesalahan');
        });
    });
  };

  // melihat perubahan url midtrans
  const onNavChange = (state) => {
    console.log(state);
    const urlSuccess =
      'http://example.com/?order_id=31&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'OrderSuccess'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onPress={() => setIsPaymentOpen(false)}
          onBack
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <ScrollView>
      <Header
        title="Order Summary"
        subTitle="You deserve better meal"
        onPress={() => navigation.goBack()}
        onBack
      />
      <View style={styles.Container}>
        <Text style={styles.textTitle}> Item Ordered </Text>
        <ItemListFood
          name={item.name}
          price={item.price}
          image={{
            uri: item.picturePath,
          }}
          items={transaction.totalItem}
          type="order-summary"
        />
        <Text style={styles.textTitle}> Details Transaction </Text>
        <ItemValue label={item.name} value={item.price} type="currency" />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          totalPrice
          type="currency"
        />
      </View>
      <View style={styles.Container}>
        <Text style={styles.textTitle}> Deliver to: </Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button text="Checkout Now" onPress={onCheckout} />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  textTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  button: {
    padding: 24,
  },
});
