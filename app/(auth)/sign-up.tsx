import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import images from '@/constants/exportsImages.ts';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import BackArrow from '@/components/backArrow';
import { Ionicons } from '@expo/vector-icons';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView className="bg-white h-full font-okra">
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView
        contentContainerClassName="h-full flex flex-col justify-start items-center relative text-white"
        showsVerticalScrollIndicator={false}
      >
        <BackArrow />

        {/* Enhanced Logo Section */}
        <View className="w-full h-[35%] rounded-b-[40px] items-center justify-center">
          <Text className="font-okra-bold text-primary text-2xl mt-4">
            Create Account
          </Text>
        </View>

        {/* Sign In Form with better spacing and shadows */}
        <View className="z-10 bg-white mx-5 w-[90%] -mt-10 rounded-3xl p-8 shadow-lg border border-gray-100">
          <Text className="font-okra-medium text-center text-lg text-gray-600 mb-6">
            Enter your details to get started
          </Text>

          <View className="space-y-4">
            {/* Username Input */}
            <View>
              <Text className="font-okra-medium text-gray-700 mb-2 ml-1">Username</Text>
              <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#9CA3AF"
                className="font-okra bg-gray-50 border border-gray-200 p-4 rounded-xl
                  text-gray-900 focus:border-primary focus:border-2"
              />
            </View>

            {/* Password Input */}
            <View>
              <Text className="font-okra-medium text-gray-700 mb-2 ml-1">Password</Text>
              <View className="relative">
                <TextInput
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#9CA3AF"
                  className="font-okra bg-gray-50 border border-gray-200 p-4 rounded-xl
                    text-gray-900 focus:border-primary focus:border-2 pr-12"
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

            {/* Confirm Password Input */}
            <View>
              <Text className="font-okra-medium text-gray-700 mb-2 ml-1">Confirm Password</Text>
              <View className="relative">
                <TextInput
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  placeholderTextColor="#9CA3AF"
                  className="font-okra bg-gray-50 border border-gray-200 p-4 rounded-xl
                    text-gray-900 focus:border-primary focus:border-2 pr-12"
                />
                <Pressable 
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-4"
                >
                  <Ionicons 
                    name={showConfirmPassword ? "eye-off" : "eye"} 
                    size={20} 
                    color="#9CA3AF"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <View className="mt-8">
            <Pressable
              onPress={() => alert("SignUp functionality is not implemented yet.")}
              className="bg-primary active:opacity-90 rounded-xl overflow-hidden"
            >
              <Text className="text-center text-white py-4 font-okra-bold text-lg">
                Sign Up
              </Text>
            </Pressable>
          </View>

          {/* Login Link */}
          <View className="mt-6">
            <Text className="font-okra text-gray-600 text-center">
              Have an account?{' '}
              <Text
                className="text-primary font-okra-medium"
                onPress={() => router.push("/(auth)/log-in")}
              >
                Log In
              </Text>
            </Text>
          </View>

          {/* Divider */}
          <View className="flex flex-row items-center my-8">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-4 font-okra text-gray-500">Or</Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Guest Button */}
          <Pressable
            onPress={() => router.push("/(root)/(screens)/home")}
            className="bg-gray-50 border border-gray-200 active:opacity-90 rounded-xl overflow-hidden"
          >
            <Text className="text-center text-gray-900 py-4 font-okra-bold text-lg">
              Continue as Guest
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;