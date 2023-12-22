import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Attendance from './Attendance';
import Notifications from './Notifications';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator  >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../assets/icon.png')} style={{ width: 30, height: 30 }} />
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
  )
}

export default HomeTabs