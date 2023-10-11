import React, {useState, forwardRef, useMemo} from 'react';
import {TextInput, StyleSheet, View, Pressable, Dimensions} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { lock ,eye,eyeClose} from '../../../../icons';

const {width, height} = Dimensions.get('window');

const InputPassword = () => {
  const [isSecureText, setIsSecureText] = useState(true);
  const [password,setPassword]= useState();

  return (
    <View style={styles.container}>
      <View style={styles.key}>
        <SvgXml
          xml={lock}
          fill={'#B9B9B9'}
          width={20}
          height={20}
        />
      </View>
      <View style={styles.password}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={'#B9B9B9'}
          style={styles.textInput}
          value={password}
          secureTextEntry={isSecureText}
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={30}
        />
      </View>
      <Pressable
        style={styles.icons}
        onPress={() => setIsSecureText(!isSecureText)}>
        <SvgXml
          xml={isSecureText ? eye : eyeClose}
          fill={'#B9B9B9'}
          width={24}
          height={24}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
      height: height * 0.055,
      width: width * 0.63,
      marginLeft: width * 0.01,
    //   fontFamily: 'Poppins-Light',
      textAlign: 'left',
      textAlignVertical: 'center',
      color:'#B9B9B9'
    },
    container: {
      borderRadius: 11,
      marginBottom: 15,
      backgroundColor:'#3C3C3C',
      width: width * 0.8,
      height: height * 0.055,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
      icons: {
      width: width * 0.05,
      justifyContent: 'center',
      alignItems: 'center',
    },
    key: {
      width: width * 0.05,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: width * 0.025,
    },
    password: {
      alignItems: 'flex-start',
    },
    errorText: {
    },
  });

export default InputPassword;
