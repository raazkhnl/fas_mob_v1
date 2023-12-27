import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './components/Welcome';
import Login from './components/Login';
import HomeTabs from './components/HomeTabs';
import Profile from './components/Profile';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeTabs} />
    //     <Drawer.Screen name="Profile" component={Profile} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false, headerBackVisible: false, }} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}