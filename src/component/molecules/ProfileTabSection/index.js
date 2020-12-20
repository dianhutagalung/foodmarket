import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {ItemListFood, ItemListMenu} from '..';
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

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListMenu label="Edit Profile" />
      <ItemListMenu label="Home Address" />
      <ItemListMenu label="Security" />
      <ItemListMenu label="Payments" />
    </View>
  );
};

const FoodMarked = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ItemListMenu label="Rate App" />
      <ItemListMenu label="Help Center" />
      <ItemListMenu label="Privacy & Policy" />
      <ItemListMenu label="Terms & Conditions" />
    </View>
  );
};
const initialLayout = {width: Dimensions.get('window').width};

const ProfileTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarked'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarked,
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
});
