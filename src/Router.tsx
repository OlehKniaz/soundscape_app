import * as React from 'react';
import {AppState, StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer ,createNavigationContainerRef }from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';


const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const AppRouter =()=> {
  return (
    <>
    {/* <StatusBar barStyle={statusBarStyle} /> */}
      <NavigationContainer
        ref={navigationRef}
        // onReady={() => SplashScreen.hide()}
        >
        <Stack.Navigator
          initialRouteName={"Login"}
          screenOptions={{headerShown: false}}>
          
        <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
      </NavigationContainer></>
  );
}
export default AppRouter;