import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Gap, Number, Rating} from '../../component';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {
    id,
    name,
    description,
    ingredients,
    price,
    rate,
    picturePath,
  } = route.params;

  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 500;
    const tax = (10 / 100) * totalPrice;
    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total: totalPrice + driver + tax,
      },
      userProfile,
    };
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.imageCover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.mainContent}>
        <View style={styles.detailCover}>
          <View style={styles.header}>
            <View>
              <Text style={styles.titleHeader}>{name}</Text>
              <Rating rating={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Gap height={12} />
          <Text style={styles.textDesc}>{description}</Text>
          <Gap height={12} />
          <Text style={styles.textIngredients}>Ingredients:</Text>
          <Text style={styles.textIngredientsSub}>{ingredients}</Text>
        </View>
      </View>

      <View style={styles.price}>
        <View>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Number number={totalItem * price} style={styles.textPrice} />
        </View>
        <View style={styles.button}>
          <Button text="Order Now" onPress={onOrder} />
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
