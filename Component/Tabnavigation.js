import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home"
import Profile from '../Screen/Profile';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        
      }}
    >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="profile" component={Profile} />
   
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})