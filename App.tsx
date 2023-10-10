import React, {useState} from "react";
import {
  Dimensions,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import WaveBackground from "./src/components/waveBackground/waveBackground";
import { SvgXml } from 'react-native-svg'
import Svg, { G, Path } from 'react-native-svg';
import { logo } from "./src/icons";

const dimens = Dimensions.get("screen");


const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your login logic here
    if (email && password) {
      // Perform authentication, API call, or any other action
      // If successful, navigate to the main app screen
    } else {
      // Display an error message or handle invalid input
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.logoStyles}>
      <SvgXml width={120} height={120} xml={logo} />
      </View>
    <View style={styles.loginFlowContainer}> 
      <Text style={styles.header}>Enter to soundscape</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B9B9B9"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B9B9B9"
        
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
     <WaveBackground/>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#494949',
  },
  loginFlowContainer:{
    height: dimens.height*0.3,
    justifyContent:'center',
    alignItems: 'center',
  },
  logoStyles:{
    height: dimens.height*0.33,
   alignSelf:'center',
    justifyContent:'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#B9B9B9"

  },
  input: {
    width: dimens.width*0.8,
    height: 40,
    // borderColor: '#A94859',
    // borderWidth: 1,
    borderRadius: 11,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor:'#3C3C3C'
  },
  loginButton: {
    backgroundColor: '#A94859',
    padding: 15,
    borderRadius: 11,
    width: dimens.width*0.3
  },
  loginButtonText: {
    color: '#B9B9B9',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;