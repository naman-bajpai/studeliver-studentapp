import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import images from "@/constants/exportsImages"


const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => {
    return (
        <View >
            <Image source={icon}/>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false,
    }}/>
  )
}

export default TabsLayout