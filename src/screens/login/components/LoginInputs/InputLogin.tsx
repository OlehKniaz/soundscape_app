import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Pressable, Dimensions} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { user} from '../../../../assets/icons';
import {sh,sw} from '../../../../utils'
import { colors } from '../../../../styles/colors';
import {inputText} from '../../../../styles/typografia'
const {width, height} = Dimensions.get('window');

const InputLogin = () => {
  const [login,setLogin]= useState();

  return (
    <View style={styles.container}>
      <View style={styles.key}>
        <SvgXml
          xml={user}
          fill={colors.inactiveIcon}
          width={sw(20)}
          height={sh(20)}
        />
      </View>
      <View style={styles.password}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={colors.inactiveIcon}
          style={styles.textInput}
          value={login}
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
      height: height * 0.055,
      width: width * 0.63,
      marginLeft: width * 0.01,
      textAlign: 'left',
      textAlignVertical: 'center',
      color:colors.text,
      ...inputText,
    // fontStyle: 'italic',
    },
    container: {
      borderRadius: 11,
      marginBottom: sh(15),
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
  });

export default InputLogin;
