import {FC, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {TextInput, StyleSheet, View, Pressable, Dimensions} from 'react-native';
import {colors} from '../../styles/colors';
import {SvgXml} from 'react-native-svg';
import {home, search, like} from '../../assets/icons';
import {sw, sh} from '../../utils';

const {width, height} = Dimensions.get('window');

interface BottomTabHorizontal {
  navigation: any;
}

const BottomTabHorizontal: FC<BottomTabHorizontal> = ({navigation}) => {
  const [isFocused, setIsFocused] = useState('home');

  const navigateHome = () => {
    navigation.navigate('Home');
    setIsFocused('home');
  };
  const navigateLiked = () => {
    setIsFocused('liked');
    navigation.navigate('Liked');
  };
  const navigateSearch = () => {
    setIsFocused('search');
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity onPress={navigateSearch}>
        <View style={styles.icons}>
          <SvgXml
            fill={isFocused == 'search' ? colors.darkPink : colors.inactiveIcon}
            xml={search}
            height={sw(23)}
            width={sw(23)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateHome}>
        <View style={styles.icons}>
          <SvgXml
            fill={isFocused == 'home' ? colors.darkPink : colors.inactiveIcon}
            xml={home}
            height={sw(23)}
            width={sw(23)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateLiked}>
        <View style={styles.icons}>
          <SvgXml
            fill={isFocused == 'liked' ? colors.darkPink : colors.inactiveIcon}
            xml={like}
            height={sw(23)}
            width={sw(23)}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.sectionBackground,
    width: width,
    height: sh(50),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: width / 3,
    alignItems: 'center',
  },
});
export default BottomTabHorizontal;
