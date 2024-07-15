import React, {FC} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WaveBackground from '../../components/waveBackground/waveBackground';
import TopNavigationTab from './TopNavigationTab';

const dimens = Dimensions.get('screen');

interface Auth {
  navigation: any;
}

const Auth: FC<Auth> = ({navigation}) => {
  return (
    <SafeAreaView>
      <TopNavigationTab />
      <WaveBackground />
    </SafeAreaView>
  );
};

export default Auth;
