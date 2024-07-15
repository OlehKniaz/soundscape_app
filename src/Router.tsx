import * as React from 'react';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/auth/login';
import HomeScreen from './screens/home';
import LikedScreen from './screens/liked';
import SearchScreen from './screens/search';
import BottomNavigationTab from './screens/BottomNavigationTab';
import TopNavigationTab from './screens/auth/TopNavigationTab';
import Registration from './screens/auth/registration';
import Auth from './screens/auth';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const AppRouter = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'TopTab'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="TopTab" component={TopNavigationTab} />
          <Stack.Screen name="BottomTab" component={BottomNavigationTab} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Liked" component={LikedScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default AppRouter;
