import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from './../../constants/Colors'

export default function TabLayout() {
  return (
  <Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:Colors.PRIMARY
  }}>
    <Tabs.Screen name="home"
    options={{
      tabBarLabel:'Home',
      tabBarIcon:({color})=><Entypo name="home" 
      size={24} color={color} />
    }}

    />
    <Tabs.Screen name="orders"
     options={{
      tabBarLabel:'Orders',
      tabBarIcon:({color})=><MaterialCommunityIcons name="cannabis" 
      size={24} color="black" />
    }}
    
    />
    <Tabs.Screen name="profile"
     options={{
      tabBarLabel:'Profile',
      tabBarIcon:({color})=><Ionicons name="person-circle" 
      size={24} color="black" />
    }}
    
    />
  </Tabs>
  )
}