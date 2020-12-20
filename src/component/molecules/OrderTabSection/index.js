import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy7} from '../../../assets';
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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        name="Soup Bumil"
        image={FoodDummy7}
        items={4}
        price={289.123}
        type="in-progress"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        image={FoodDummy7}
        items={4}
        price={289.123}
        type="in-progress"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListFood
        name="Soup Bumil"
        image={FoodDummy7}
        items={4}
        price={289.123}
        type="past-orders"
        date="Jun 12, 14:00"
        // s
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        name="Soup Bumil"
        image={FoodDummy7}
        items={4}
        price={289.123}
        type="past-orders"
        date="Jun 12, 14:00"
        status="canceled"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
