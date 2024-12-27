import { View, Text, StatusBar, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapPin, Bell, ChevronDown, Search, Sliders, Clock } from 'react-native-feather'
import images from '@/constants/exportsImages'
import { recommendedListData } from '@/constants/dummyData'


export default function index() {
  return (
    <SafeAreaView className='font-okra flex h-screen flex-col  items-center '>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5e17eb'} />

      <View className='bg-primary p-6 flex-col flex gap-3 w-full rounded-b-3xl'>
        {/* Address settings and notificaton */}
        <View className='flex justify-between items-center h-fit flex-row bg-primary w-full '>
          <View className='flex-row flex gap-2 items-center justify-start'>
            <MapPin color={'#fff'} />
            <Text className='font-okra-medium text-white'>Deliver to</Text>
            <View className='flex flex-row '>

              <Text className='font-okra-bold underline text-yellow-200'>Home </Text>
              <ChevronDown width={18} height={20} color={'#fef08a'} />
            </View>
          </View>
          <View>
            <Bell color={'#fff'} width={24} height={24} />
          </View>
        </View>

        {/* Search Bar  */}
        <View className='relative'>
          <TextInput className='w-full flex justify-center bg-white  items-center h-12 rounded-md px-12 ' placeholder='Search for a restaurant' />
          <View className='absolute top-1/2 -translate-y-[50%] left-2'>
            <Search color={'#5e17eb'} />
          </View>
          <View className='absolute top-1/2 -translate-y-[50%] right-2'>
            <Sliders color={'#5e17eb'} />
          </View>
        </View>

        {/* Different Food Options  */}

        <View className="flex flex-row gap-4 w-full justify-between p-3">
          <Image
            source={images.breakfast}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
          />
          <Image
            source={images.burger}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
          />
          <Image
            source={images.pizza}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
          />
          <Image
            source={images.coffee}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
          />
          <Image
            source={images.drink}
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
          />
        </View>



      </View>
      {/* Favourite Section */}
      <View className="bg-white  w-full p-6">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="font-okra-bold text-lg">Favourite</Text>
          <Text className="font-okra text-black-200">See all</Text>
        </View>

        {/* Horizontal Scrollable Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row py-1">
          {recommendedListData.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              className="bg-gray-200  rounded-lg p-3 mr-4 min-w-48 shadow-black shadow-2xl"
            >
              <Image
                source={{ uri: restaurant.imageUrl }}
                className="h-32 w-full rounded-lg mb-2"
                resizeMode="cover"
              />
              <Text className="font-okra-bold text-base text-gray-800 truncate">
                {restaurant.name}
              </Text>
              <Text className="font-okra text-sm text-green-600">{restaurant.discount}</Text>
              <View className='flex flex-row justify-between'>
                <View className=' px-0.5 rounded-lg'><Text>{restaurant.rating}</Text></View>
                <Text className="bg-pink-200 px-2 rounded-full w-fit font-okra text-sm text-danger">{restaurant.distance}</Text>

                
                <Text className="bg-pink-200 px-2 rounded-full w-fit font-okra text-sm text-danger flex flex-row gap-1">{restaurant.distance}</Text>
              </View>


            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};