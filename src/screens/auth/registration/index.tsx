import React, {useState, FC} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {sh, sw} from '../../../utils';
import {colors} from '../../../styles/colors';
import {AuthService} from '../../../service/AuthService';
import LinearGradient from 'react-native-linear-gradient';
import {arrow, logo} from '../../../assets/icons';
import {inputText} from '../../../styles/typografia';
const {width, height} = Dimensions.get('window');
import {
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
  MediaType,
} from 'react-native-image-picker';
import {emptyUser} from '../../../assets/icons/emptyUser';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Credentials} from '../../../service/Interfaces/AuthInterfaces';

interface Registration {
  navigation: any;
}

const options = {
  selectionLimit: 1,
  mediaType: 'photo' as MediaType,
};

const Registration: FC<Registration> = ({navigation}) => {
  const [name, setName] = useState('q');
  const [password, setPassword] = useState('q');
  const [isFieldsComplete, setIsFiledsComplete] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const openGallery = async () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleCreateAccount = async () => {
    // if (0==0) {
    // try {
    const credentials: Credentials = {
      accountName: name,
      password: password,
    };

    const isLogin = await AuthService.login(credentials);

    // } catch (err : any) {
    // const {status} = err.toJSON();
    // }
    // }
    // else {
    // setIsFiledsComplete(true)
    // }
    navigation.navigate('BottomTab');
  };

  return (
    <LinearGradient
      colors={['#828181', colors.backgroundScreens]}
      start={{x: -0.01, y: 0}}
      style={styles.safeAreaViewContainer}>
      <View style={styles.imageViewStyles}>
        {selectedImage ? (
          <Image source={{uri: selectedImage}} style={styles.imageStyles} />
        ) : (
          <SvgXml
            style={styles.avatarArea}
            width={width * 0.3}
            height={height * 0.2}
            xml={emptyUser}
            fill={colors.pink}
            strokeWidth={1}
          />
        )}
      </View>
      <Pressable style={styles.imageButton} onPress={openGallery}>
        <Text style={styles.imageButtonText}>Set User Image</Text>
      </Pressable>
      <View style={styles.loginFlowContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={colors.inactiveIcon}
          style={styles.textInput}
          // value={}
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={30}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.inactiveIcon}
          style={styles.textInput}
          // value={}
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={30}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.inactiveIcon}
          style={styles.textInput}
          // value={}
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={30}
        />
        <Pressable style={styles.loginButton} onPress={handleCreateAccount}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </Pressable>
      </View>
      <LinearGradient
        colors={['#595959', colors.background]}
        start={{x: -0.1, y: 0.5}}
        style={styles.createSwipe}>
        <SvgXml
          style={{transform: [{rotateY: '180deg'}]}}
          xml={arrow}
          fill={colors.inactiveIcon}
          width={sw(15)}
          height={sh(15)}
        />
        <Text style={styles.navigateText}>Login</Text>
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
  avatarArea: {
    alignSelf: 'center',
  },
  createSwipe: {
    alignSelf: 'flex-start',
    marginTop: sh(50),
    height: height * 0.06,
    width: width * 0.3,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    paddingHorizontal: sw(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 150,
  },
  textInput: {
    height: height * 0.055,
    width: width * 0.7,
    paddingLeft: width * 0.03,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: colors.text,
    alignItems: 'flex-start',
    backgroundColor: colors.sectionBackground,
    borderRadius: 11,
    marginBottom: sh(15),
    ...inputText,
  },
  loginFlowContainer: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 100,
    alignSelf: 'center',
  },
  imageViewStyles: {
    height: height * 0.33,
    alignSelf: 'center',
    justifyContent: 'center',
    width: width * 0.42,
    maxHeight: height * 0.2,
    borderRadius: 100,
    marginTop: sh(50),
    // marginBottom:sh(40),
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
  imageButton: {
    paddingVertical: sh(11),
    borderRadius: 11,
    borderBottomWidth: 1,
    borderColor: colors.pink,
    width: width * 0.43,
    marginBottom: sh(45),
    color: colors.darkPink,
  },
  loginButtonText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
  imageButtonText: {
    color: colors.pink,
    fontSize: 18,
    textAlign: 'center',
  },
  navigateText: {
    fontSize: 13,
    color: colors.text,
    paddingRight: sw(5),
    fontFamily: 'Gobold CYR-LAT',
  },
  input: {
    alignItems: 'flex-start',
    backgroundColor: colors.sectionBackground,
    borderRadius: 11,
    width: width * 0.7,
    height: height * 0.055,
    marginBottom: sh(15),
  },
});

export default Registration;
