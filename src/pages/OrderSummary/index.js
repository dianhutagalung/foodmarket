import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../component';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header title="Payment" subTitle="You deserve better meal" onBack />
      <View style={styles.Container}>
        <Text style={styles.textTitle}>Item Ordered</Text>
        <ItemListFood
          name="Cherry Healthy"
          price="IDR 289.000"
          image={FoodDummy1}
          items={14}
          type="order-summary"
        />
        <Text style={styles.textTitle}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue label="Total Price" value="IDR 390.803.000" totalPrice />
      </View>

      <View style={styles.Container}>
        <Text style={styles.textTitle}>Deliver to:</Text>
        <ItemValue label="Name" value="Angga Risky" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>

      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('OrderSuccess')}
        />
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
