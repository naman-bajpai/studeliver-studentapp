import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import images from '@/constants/exportsImages';
import { router } from 'expo-router';
import BackArrow from '@/components/backArrow';
import { Ionicons } from '@expo/vector-icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="bg-white h-full font-okra">
      <StatusBar style="dark" backgroundColor="white" />

      <ScrollView contentContainerClassName="h-full flex flex-col justify-start items-center relative">
        <BackArrow/>

        {/* Enhanced Header Section with Gradient */}
        <View className="w-full h-[40%] bg-gradient-to-r from-[#7B2FEF] to-[#9F2FEF] rounded-b-[40px] items-center justify-center">
          <View className="absolute w-full h-full overflow-hidden rounded-b-[40px]">
            <Image
              source={images.loginmainbg}
              alt="background"
              className="w-full h-full opacity-10"
              style={{ resizeMode: 'cover' }}
            />
            {/* Add subtle pattern overlay */}
            <View className="absolute inset-0 bg-[#7B2FEF] opacity-20" />
          </View>
          
          <Image
            source={images.logo_transparent_cropped}
            alt="studeliver-logo"
            style={{ height: 100, width: 100, resizeMode: "contain" }}
            className="tint-white"
          />
          <Text className="font-okra-bold text-3xl mt-4 text-primary">
            Welcome Back!
          </Text>
          <Text className="font-okra text-base mt-2 text-primary">
            Sign in to continue
          </Text>
        </View>

        {/* Enhanced Login Form */}
        <View className="z-10 bg-white mx-5 w-[90%] -mt-16 rounded-3xl p-8 shadow-xl border border-gray-100">
          {/* Email Input with Icon */}
          <View className="mb-6">
            <Text className="font-okra-medium text-gray-700 mb-2 ml-1">
              University Email
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                className="font-okra bg-gray-50 border border-gray-200 p-4 pl-12 rounded-xl
                  text-gray-900 focus:border-[#7B2FEF] focus:border-2"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <View className="absolute left-4 top-1/2 -translate-y-1/2">
                <Text>📧</Text>
              </View>
            </View>
          </View>

          {/* Password Input with Icon */}
          <View className="mb-6">
            <Text className="font-okra-medium text-gray-700 mb-2 ml-1">
              Password
            </Text>
            <View className="relative">
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                className="font-okra bg-gray-50 border border-gray-200 p-4 rounded-xl
                  text-gray-900 focus:border-[#7B2FEF] focus:border-2 pr-12"
                placeholderTextColor="#9CA3AF"
              />
              <Pressable 
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4"
              >
                <Ionicons 
                  name={showPassword ? "eye-off" : "eye"} 
                  size={20} 
                  color="#9CA3AF"
                />
              </Pressable>
            </View>
          </View>

          {/* Login Button */}
          <View className="mt-3">
            <Pressable
              onPress={() => alert("Login functionality is not implemented yet.")}
              className="bg-gradient-to-r from-[#7B2FEF] to-[#9F2FEF] active:opacity-90 rounded-xl overflow-hidden"
            >
              <Text className="text-center text-white py-4 font-okra-bold text-lg bg-primary">
                Log In
              </Text>
            </Pressable>
          </View>

          {/* Sign Up Link with Enhanced Styling */}
          <View className="mt-8 items-center">
            <Text className="font-okra text-gray-600 text-center">
              Don't have an account?
            </Text>
            <Pressable 
              onPress={() => router.push('/sign-up')}
              className="mt-2 px-6 py-2 rounded-full border border-[#7B2FEF]/20"
            >
              <Text className="text-[#7B2FEF] font-okra-medium">
                Create Account
              </Text>
            </Pressable>
          </View>

          {/* Divider */}
          <View className="flex flex-row items-center my-3">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-4 font-okra text-gray-500">Or</Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Guest Button */}
          <Pressable
            onPress={() => router.push("/(root)/(screens)/home")}
            className="bg-primary border border-gray-200 active:opacity-90 rounded-xl overflow-hidden"
          >
            <Text className="text-center text-white text-gray-900 py-4 font-okra-bold text-lg">
              Continue as Guest
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
