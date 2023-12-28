import { Button, Image, Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import style from "../style";

import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
function Welcome({ navigation }) {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  const [username, setUserame] = useState('')
  const [password, setPassword] = useState('')
  return (

    <View style={styles.bg}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.welcome}>Welcome to FAS!</Text>
      <Text style={styles.tagline}>The effortless attendance tracking system.</Text>
      <View style={{ margin: 50, paddingVertical: 20, paddingHorizontal: 50, alignItems: 'center', backgroundColor: '#81CEEB', borderRadius: 30 }}>
        <TextInput style={[style.input]} onChangeText={(text) => setUserame(text)} placeholder="Enter your username" />
        <TextInput style={[style.input]} onChangeText={(pass) => setPassword(pass)} placeholder="Enter your password" secureTextEntry={true}/>
        <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")}>
          <Text style={[style.button, style.danger]}>      Login      </Text>
        </TouchableOpacity>
      </View>

      {/* <Button onPress={() => navigation.navigate('Login')} title="Login" /> */}
    </View>

  )
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#c3e3eb'
  },
  loginButton: {
    width: '30%',
    height: 30,
    backgroundColor: 'skyblue',
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white'
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 100
  },
  welcome: {
    position: 'absolute',
    top: 220,
    fontWeight: 'bold',
    fontSize: 35
  },
  tagline: {
    position: 'absolute',
    top: 280,
    textAlign: 'center',
    fontSize: 25
  }
})
export default Welcome