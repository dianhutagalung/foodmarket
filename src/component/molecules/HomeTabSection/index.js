import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
  FoodDummy6,
  FoodDummy7,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 14,
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy5}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy6}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        price="289.000"
        rating="4.2"
        image={FoodDummy7}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
