import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>This is the main page</Text>
      <Link href={"/"}>Home</Link>
      <Link href={'sign-in'}>SignIn</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={{pathname: "/restaurant/[id]", params:{id: '1'}}}>Profile</Link>

    </View>
  )
}

export default index