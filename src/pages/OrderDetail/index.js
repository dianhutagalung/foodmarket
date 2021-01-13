import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Header, ItemListFood, ItemValue} from '../../component';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';

const OrderDetail = ({route, navigation}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then((res) => {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch((err) => {
          showMessage(err?.response?.message || 'terjadi kesalahan');
        });
    });
  };

  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.Container}>
        <Text style={styles.textTitle}>Item Ordered</Text>
        <ItemListFood
          name={order.food.name}
          price={order.total}
          image={{uri: order.food.picturePath}}
          items={order.quantity}
          type="order-summary"
        />
        <Text style={styles.textTitle}>Details Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={order.food.price * order.quantity}
          type="currency"
        />
        <ItemValue label="Driver" value={50000} />
        <ItemValue label="Tax 10%" value={(10 / 100) * order.total} />
        <ItemValue
          label="Total Price"
          value={order.total}
          totalPrice
          type="currency"
        />
      </View>

      <View style={styles.Container}>
        <Text style={styles.textTitle}>Deliver to:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phoneNumber} />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No." value={order.user.houseNumber} />
        <ItemValue label="City" value={order.user.city} />
      </View>

      <View style={styles.Container}>
        <Text style={styles.textTitle}>Order Status:</Text>
        <ItemValue label={`#${order.id}`} value={order.status} totalPrice />
      </View>

      <View style={styles.button}>
        {order.status === 'PENDING' && (
          <Button
            text="Cancel My Order"
            backgroundColor="#D9435E"
            color="#FFFFFF"
            onPress={onCancel}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

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
