import { View, Text, Image, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import images from '@/constants/exportsImages.ts'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
const SignIn = () => {
  
  return (

    <SafeAreaView className='bg-white h-full font-okra' >
      <StatusBar style="light" backgroundColor='#000' />

      <ScrollView contentContainerClassName='h-full flex flex-col justify-center items-center relative ' >

        <View className='absolute flex flex-col  w-full top-0 bg-accent h-full'>

          <Image source={images.signupbg} style={{ height: 300, resizeMode: "contain" }} className='w-full' />
          <View className="absolute top-0 left-0 w-full h-full bg-primary-200" />
        </View>

        

        <View className='z-10 bg-accent mx-5 w-[90%]  mt-28 rounded-3xl p-10 pt-5 shadow shadow-black elevation-md'>
          <Image source={images.logo_transparent_cropped} alt='studeliver-logo'  className='' style={{ height: 100, width: "100%", resizeMode: "contain" }} />
          <Text className='font-okra-medium text-center text-2xl '>Serving up delicious moments{"\n"}<Text className='font-okra-bold text-primary'>Join us!</Text></Text>
          <View className="mt-6">
            {/* <Text className="text-lg font-semibold mb-2">Username</Text> */}
            <TextInput
              placeholder="Enter your username"
              className="font-okra border border-gray-500 p-4 rounded-3xl mb-4 focus:border-primary focus:outline-none "
            />
            {/* <Text className="text-lg font-semibold mb-2">University Email</Text> */}
            <TextInput
              placeholder="Enter your university email"
              keyboardType="email-address"
              className="font-okra border border-gray-500 p-4 rounded-3xl mb-6 focus:border-primary focus:outline-none"
            />
          </View>

          {/* Submit Button */}
          <View className="mt-2">
            <Pressable
              onPress={() => alert('SignUp functionality is not implemented yet.')}
              className=""
            >

            <Text
              className="bg-primary text-center text-white py-3 rounded-3xl font-okra-bold"
            >
              Sign Up
            </Text>
            </Pressable>
          </View>

          <View className='mb-10'>
            <Text className="font-okra text-sm text-center mt-4">Have an account?</Text>
            <Text
              className="text-sm text-primary font-okra-medium text-center"

              onPress={() => alert('SignUp functionality is not implemented yet.')}
            >
              Log In
            </Text>
          </View>
          <View className='w-full relative mt-auto'>
            <View className='h-0.5 bg-black-200 w-full'></View>
            <Text className='font-okra bg-accent px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Or</Text>
          </View>
          <View className="mt-8">
            <Pressable
              onPress={() => router.push("/")}
              className=""
            >

            <Text 
              className="bg-accent text-center text-black-300 border border-primary py-3 rounded-3xl font-okra-bold"
            >
               Enter as a Guest! 
               {/* Add on click listeneer to navigate to / */}
            </Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

export default SignIn