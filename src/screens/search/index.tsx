import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {colors} from '../../styles/colors';
import {sh, sw} from '../../utils';
import {searchText} from '../../styles/typografia';

const {width, height} = Dimensions.get('window');

const SearchScreen = () => {
  const [searchElement,setSearchElement] = ('');
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
});
export default SearchScreen;
