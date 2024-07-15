import React, {FC, useState} from 'react';
import {
  Dimensions,
  Share,
  Alert,
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/icons';
import {sh, sw} from '../../../utils';
import InputPassword from './components/LoginInputs/InputPassword';
import InputLogin from './components/LoginInputs/InputLogin';
import {colors} from '../../../styles/colors';
import {arrow} from '../../../icons';
import LinearGradient from 'react-native-linear-gradient';
import {Credentials} from '../../../service/Interfaces/AuthInterfaces';
import {AuthService} from '../../../service/AuthService';

const {width, height} = Dimensions.get('window');

interface Login {
  navigation: any;
}

const Login: FC<Login> = ({navigation}) => {
  {
    navigation;
  }
  // const [name, setName] = useState('q');
  // const [password, setPassword] = useState('q');
  const [isFieldsComplete, setIsFiledsComplete] = useState(false);

  const handleLogin = async () => {
    if (!isFieldsComplete) {
      try {
        // const credentials: Credentials = {
        //   accountName: name,
        //   password: password,
        // };

        // const isLogin = await AuthService.login(credentials);
      } catch (err: any) {
        // const {status} = err.toJSON();
      }
    } else {
      setIsFiledsComplete(true);
    }
    navigation.navigate('BottomTab');
  };

  // const handleCreateAccount = () => {
  //   if (name && password) {
  //   } else {
  //   }
  //   navigation.navigate('BottomTab');
  // };

  return (
    <LinearGradient
      colors={['#828181', colors.backgroundScreens]}
      start={{x: 0.7, y: 0}}
      style={styles.safeAreaViewContainer}>
      <View style={styles.logoStyles}>
        <SvgXml
          width={sw(140)}
          height={sh(140)}
          xml={logo}
          fill={colors.pink}
          strokeWidth={1}
        />
      </View>
      <View style={styles.loginFlowContainer}>
        <Text style={styles.headerText}>Enter in soundscape</Text>
        {/* TODO add prors */}
        <InputLogin />
        <InputPassword />
        <Pressable
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isFieldsComplete}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </Pressable>
      </View>
      <LinearGradient
        colors={['#595959', colors.background]}
        start={{x: 0.8, y: 0}}
        style={styles.createSwipe}>
        <Text style={styles.navigateText}>Create Account</Text>
        <SvgXml
          xml={arrow}
          fill={colors.inactiveIcon}
          width={sw(15)}
          height={sh(15)}
        />
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundScreens,
  },
  createSwipe: {
    alignSelf: 'flex-end',
    marginTop: sh(50),
    height: height * 0.06,
    width: width * 0.3,
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    paddingHorizontal: sw(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 150,
  },
  loginFlowContainer: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    paddingTop: height * 0.04,
    height: height * 0.295,
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
    width: width * 0.33,
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
  navigateText: {
    fontSize: 13,
    color: colors.text,
    paddingRight: sw(5),
    fontFamily: 'Gobold CYR-LAT',
  },
});

export default Login;
