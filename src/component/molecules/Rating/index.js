import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = ({rating}) => {
  return (
    <View style={styles.rating}>
      <IcStarOn />
      <IcStarOn />
      <IcStarOn />
      <IcStarOn />
      <IcStarOff />
      <Text style={styles.textRating}>{rating}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
  textRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
