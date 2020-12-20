import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, HeaderProfile, HomeTabSection} from '../../component';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HeaderProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <FoodCard name="Cherry Healthy" image={FoodDummy1} rating="4.4" />
              <FoodCard name="Burger Tamayo" image={FoodDummy2} rating="4.4" />
              <FoodCard name="Cherry Healthy" image={FoodDummy3} rating="4.4" />
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
