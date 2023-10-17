import React, {useState, FC} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import WaveBackground from '../../components/waveBackground/waveBackground';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../assets/icons';
import {sh, sw} from '../../utils';
import InputPassword from './components/LoginInputs/InputPassword';
import InputLogin from './components/LoginInputs/InputLogin';
import {colors} from '../../styles/colors';

const dimens = Dimensions.get('screen');

interface Login {
  navigation: any;
}

const Login: FC<Login> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
    } else {
    }
    navigation.navigate('BottomTab');
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.logoStyles}>
        <SvgXml width={sw(120)} height={sh(120)} xml={logo} />
      </View>
      <View style={styles.loginFlowContainer}>
        <Text style={styles.headerText}>Enter in soundscape</Text>
        {/* TODO add prors */}
        <InputLogin />
        <InputPassword />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <WaveBackground />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loginFlowContainer: {
    height: dimens.height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    height: dimens.height * 0.33,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
    fontFamily: 'Gobold CYR-LAT',
  },
  loginButton: {
    backgroundColor: colors.pink,
    paddingVertical: sh(11),
    borderRadius: 11,
    width: dimens.width * 0.33,
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Login;
