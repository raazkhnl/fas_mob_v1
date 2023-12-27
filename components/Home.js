import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import style from "../style";


const Home = ({ navigation, route }) => {
  // const {username,password}=route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Username: {username}</Text>
			<Text>Password: {password}</Text> */}
      {/* <Button
        onPress={() => navigation.navigate('Attendance')}
        title="Check your Attendance"
      /> */}
      <Text>Welcome to FAS</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>
        <Text style={[style.button, style.primary]}>Check your Attendance</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home