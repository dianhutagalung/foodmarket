import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from '..';
import {IcStarOff, IcStarOn} from '../../../assets';

const FoodCard = ({image, name, rating}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Rating rating={rating} />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  rating: {
    flexDirection: 'row',
  },
  textRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
