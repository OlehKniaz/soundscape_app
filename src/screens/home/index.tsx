import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
  } from 'react-native';
  import {colors} from '../../styles/colors';
  import {sh, sw} from '../../utils';
  
  const {width, height} = Dimensions.get('window');
  

const HomeScreen = () =>{
    return(
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safeAreaViewContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.backgroundScreens,
    },
});
export default HomeScreen;