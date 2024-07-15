import React, {useState, forwardRef, useMemo} from 'react';
import {TextInput, StyleSheet, View, Pressable, Dimensions} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {lock, eye, eyeClose} from '../../../../../assets/icons';
import {sh, sw} from '../../../../../utils';
import {colors} from '../../../../../styles/colors';
import {inputText} from '../../../../../styles/typografia';

const {width, height} = Dimensions.get('window');

const InputPassword = () => {
  const [isSecureText, setIsSecureText] = useState(true);
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.key}>
        <SvgXml
          xml={lock}
          fill={colors.inactiveIcon}
          width={sw(20)}
          height={sh(20)}
        />
      </View>
      <View style={styles.password}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.text}
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
          fill={colors.inactiveIcon}
          width={sw(24)}
          height={sh(20)}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: height * 0.055,
    width: width * 0.6,
    marginLeft: width * 0.01,
    textAlign: 'left',
    textAlignVertical: 'center',
    ...inputText,
    color: '#B9B9B9',
  },
  container: {
    borderRadius: 11,
    marginBottom: 15,
    backgroundColor: '#3C3C3C',
    width: width * 0.75,
    height: height * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.005,
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
  errorText: {},
});

export default InputPassword;
