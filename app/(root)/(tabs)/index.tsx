import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index () {
  return (
    <SafeAreaView className='font-okra'>
      <Text className='font-okra-bold text-black'>This is the main page</Text>
      <Link href={"/"}>Home</Link>
      <Link href={"/sign-in"}>SignIn</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={{pathname: "/restaurant/[id]", params:{id: '1'}}}>Profile</Link>
    </SafeAreaView>
  )
};