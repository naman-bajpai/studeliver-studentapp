import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => {

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
                <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: focused? '#F12F59' : '#F8F8F8', justifyContent: 'center', alignItems: 'center' }}></View>)
        }} />
        {/* <Tabs.Screen name="Profile"  />
        <Tabs.Screen name="Cart"  /> */}
    </Tabs>
  )
}

export default TabsLayout