import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
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
    <Tabs screenOptions={{
        tabBarStyle: { backgroundColor: '#F8F8F8', position: "absolute", borderTopColor: "#000", borderTopWidth: 1, minHeight: 60},
        tabBarShowLabel: false,
        tabBarIconStyle: { marginBottom: 5 },
    }}>
        <Tabs.Screen name="index" options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={images.diningbell} focused={focused} title='Home'/>
               )
        }} />
        {/* <Tabs.Screen name="Profile"  />
        <Tabs.Screen name="Cart"  /> */}
    </Tabs>
  )
}

export default TabsLayout