import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import images from '@/constants/exportsImages.ts';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import BackArrow from '@/components/backArrow';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="bg-white h-full font-okra">
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView
        contentContainerClassName="h-full flex flex-col justify-center items-center relative"
        showsVerticalScrollIndicator={false}
      >
        <BackArrow />

        {/* Logo Section */}
        <View className="absolute flex flex-col w-full top-0 bg-transparent h-full">
          <Image
            source={images.logo_transparent_cropped}
            alt="studeliver-logo"
            style={{ height: 300, width: 300, resizeMode: "contain", alignSelf: "center" }}
          />
        </View>

        {/* Sign In Form */}
        <View className="z-10 bg-white mx-5 w-[100%] mt-28 rounded-3xl p-10 pt-5">
          <Text className="font-okra-medium text-center text-2xl">
            Serving up delicious moments{"\n"}
            <Text className="font-okra-bold text-primary">Join us!</Text>
          </Text>

          <View className="mt-6 space-y-4">
            <TextInput
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="#6B7280"
              className="font-okra bg-gray-50 border border-gray-300 p-4 rounded-3xl
    text-gray-900 focus:border-primary focus:border-2 text-base mb-4"
            />

            <TextInput
              placeholder="Enter your university email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#6B7280"
              className="font-okra bg-gray-50 border border-gray-300 p-4 rounded-3xl
    text-gray-900 focus:border-primary focus:border-2 text-base"
            />
          </View>

          {/* Submit Button */}
          <View className="mt-6">
            <Pressable
              onPress={() => alert("SignUp functionality is not implemented yet.")}
              className="active:opacity-90"
            >
              <Text className="bg-primary text-center text-white py-4 rounded-3xl 
                font-okra-bold text-lg">
                Sign Up
              </Text>
            </Pressable>
          </View>

          <View className="mb-8">
            <Text className="font-okra text-gray-600 text-sm text-center mt-4">
              Have an account?{' '}
              <Text
                className="text-primary font-okra-medium"
                onPress={() => router.push("/log-in")}
              >
                Log In
              </Text>
            </Text>
          </View>

          <View className="w-full relative">
            <View className="h-[1px] bg-gray-200 w-full"></View>
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-white px-4">
              <Text className="font-okra text-gray-500">Or</Text>
            </View>
          </View>

          <View className="mt-8">
            <Pressable
              onPress={() => router.push("/home")}
              className="active:opacity-90"
            >
              <Text className="bg-gray-50 text-center text-gray-900 border border-primary 
                py-4 rounded-3xl font-okra-bold text-lg">
                Enter as a Guest
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;