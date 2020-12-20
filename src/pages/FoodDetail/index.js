import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Gap, Rating} from '../../component';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.imageCover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.mainContent}>
        <View style={styles.detailCover}>
          <View style={styles.header}>
            <View>
              <Text style={styles.titleHeader}>Cherry Healthy</Text>
              <Rating rating="4.2" />
            </View>
            <Counter />
          </View>
          <Gap height={12} />
          <Text style={styles.textDesc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Gap height={12} />
          <Text style={styles.textIngredients}>Ingredients:</Text>
          <Text style={styles.textIngredientsSub}>
            Seledri, telur, blueberry, madu.
          </Text>
        </View>
      </View>

      <View style={styles.price}>
        <View>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Text style={styles.textPrice}>IDR 12.289.000</Text>
        </View>
        <View style={styles.button}>
          <Button
            text="Order Now"
            onPress={() => navigation.navigate('OrderSummary')}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  imageCover: {
    height: 330,
  },
  back: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginLeft: 16,
  },
  mainContent: {flex: 1},
  detailCover: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 26,
    marginTop: -40,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  textDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  textIngredients: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  textIngredientsSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  totalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  textPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
  },
  button: {
    width: 163,
    height: 45,
  },
});
