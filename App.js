import * as React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator  >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('./assets/icon.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('You have no new notification!')}>
              <MaterialCommunityIcons name="bell" size={25} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen name="Attendance" component={Attendance} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name="arrow-left" size={30} />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="clipboard-check" color={color} size={size} />
        ),
      })} />

      <Tab.Screen name="Notifications" component={Notifications} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name="arrow-left" size={30} />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      })} />
      <Tab.Screen name="Profile" component={Profile} options={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons name="arrow-left" size={30} />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      })} />
    </Tab.Navigator>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Attendance')}
        title="Check your Attendance"
      />
    </View>
  );
}
function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('HomeTabs')} title="Conform Login" />

    </View>
  );
}
function Welcome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Button onPress={() => navigation.navigate('Login')} title="Login" />

    </View>
  );
}
function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Notification</Text>

    </View>
  );
}
function Attendance({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Notification</Text>

    </View>
  );
}

const Drawer = createDrawerNavigator();

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
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false, headerBackVisible: false, }} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}