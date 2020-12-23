import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, HeaderProfile, HomeTabSection} from '../../component';
import {getFoodData} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  });
  return (
    <ScrollView>
      <View style={styles.page}>
        <HeaderProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              {food.map((itemFood) => {
                console.log('foodcard: ', itemFood);
                return (
                  <FoodCard
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  foodCardContainer: {
    flexDirection: 'row',
    padding: 24,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1,
  },
});
