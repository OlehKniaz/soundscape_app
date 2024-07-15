import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../styles/colors';
import {sh, sw} from '../../utils';
import {searchText} from '../../styles/typografia';
import {SearchList} from './components/searchList';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');

const searchItem: SearchItem[] = [
  {
    id: 1,
    title: 'Hello',
    artist: 'World',
    logo: 'https://i.pinimg.com/564x/fe/81/10/fe81107c2d901cf281555e5edbe4f100.jpg',
  },
  {
    id: 2,
    title: 'Second',
    artist: 'World',
    logo: 'https://i.pinimg.com/564x/1e/ed/b4/1eedb458f43eacf4baa39cd88d106b43.jpg',
  },
];

const SearchScreen = () => {
  const [searchElement, setSearchElement] = '';
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.inactiveIcon}
        style={styles.searchContainer}
        value={searchElement}
        autoCapitalize="none"
        returnKeyType="done"
        maxLength={30}
      />
      <SearchList searchItems={searchItem} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundScreens,
  },
  searchContainer: {
    margin: sw(15),
    alignSelf: 'center',
    width: width * 0.8,
    backgroundColor: colors.sectionBackground,
    height: height * 0.05,
    borderRadius: 11,
    paddingHorizontal: sw(15),
    ...searchText,
    color: colors.text,

    shadowColor: colors.background,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  list: {
    backgroundColor: 'white',
    width: width,
    height: height,
  },
});
export default SearchScreen;
