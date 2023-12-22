import { View, Text } from 'react-native'
import React from 'react'

const Notifications = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Notification</Text>

    </View>
  )
}

export default Notifications