import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from './login';
import Registration from './registration';
import WaveBackground from '../../components/waveBackground/waveBackground';

const Tab = createMaterialTopTabNavigator();

const TopNavigationTab = () => (
  <>
    <Tab.Navigator tabBar={() => null} initialRouteName="Login">
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Registration" component={Registration} />
    </Tab.Navigator>
    <WaveBackground />
  </>
);
export default TopNavigationTab;
