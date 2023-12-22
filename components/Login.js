import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import style from "../style";

const Login = ({ navigation }) => {
  const [username, setUserame] = useState('')
  const [password, setPassword] = useState('')
  return (

    <View style={{ margin: 20, padding: 10, alignItems: 'center', backgroundColor: 'grey', borderRadius: 30 }}>
      <TextInput onChangeText={(text) => setUserame(text)} placeholder="Enter your username" />
      <TextInput onChangeText={(pass) => setPassword(pass)} placeholder="Enter your password" />
      <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")}>
        <Text style={[style.button, style.primary]}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Login</Text>
    //   <Button onPress={() => navigation.navigate('HomeTabs')} title="Conform Login" />

    // </View>
  )
}

export default Login