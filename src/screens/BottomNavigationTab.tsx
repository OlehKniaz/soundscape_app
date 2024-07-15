import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import LikedScreen from './liked';
import SearchScreen from './search';
import BottomTabHorizontal from '../components/bottomTabs/BottomTabHorizontal';

const Tab = createBottomTabNavigator();

const BottomNavigationTab = () => (
  <Tab.Navigator
    tabBar={(props: any) => <BottomTabHorizontal {...props} />}
    screenOptions={{
      // tabBarShowLabel: false,
      headerShown: false,
    }}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{tabBarLabel: 'Home'}}
    />
    <Tab.Screen
      name="Liked"
      component={LikedScreen}
      options={{tabBarLabel: 'Liked'}}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{tabBarLabel: 'Search'}}
    />
  </Tab.Navigator>
);

export default BottomNavigationTab;
