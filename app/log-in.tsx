import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import images from "@/constants/exportsImages";
import { router } from 'expo-router';

const Login = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpComplete, setIsOtpComplete] = useState(false);

  const handleOtpChange = (value : any, index : any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Check if OTP is complete
    if (newOtp.every((digit) => digit !== '')) {
      setIsOtpComplete(true);
    } else {
      setIsOtpComplete(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full font-okra">
      <StatusBar style="light" backgroundColor="#000" />

      <ScrollView contentContainerClassName="h-full flex flex-col justify-center items-center relative">
        <View className="absolute flex flex-col w-full top-0 bg-accent h-full">
          <Image
            source={images.loginbg}
            style={{ height: 300, resizeMode: 'contain' }}
            className="w-full"
          />
          <View className="absolute top-0 left-0 w-full h-full bg-primary-200" />
        </View>

        <View className="z-10 bg-accent mx-5 w-[90%] mt-28 rounded-3xl p-10 pt-5 shadow shadow-black elevation-md">
          <Image
            source={images.logo_transparent_cropped}
            alt="studeliver-logo"
            className=""
            style={{ height: 100, width: '100%', resizeMode: 'contain' }}
          />
          <Text className="font-okra-medium text-center text-2xl">
            Serving up delicious moments{'\n'}
            <Text className="font-okra-bold text-primary">Welcome Back!</Text>
          </Text>
          <View className="mt-6">
            <TextInput
              placeholder="Enter your username OR University Email"
              className="font-okra border border-gray-500 p-4 rounded-3xl mb-4 focus:border-primary focus:outline-none"
            />
          </View>

          {/* OTP Input */}
          {showOtpInput && (
            <View className="flex flex-row justify-center items-center gap-4 my-4">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  maxLength={1}
                  keyboardType="numeric"
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  className="font-okra text-center border border-gray-500 p-4 rounded-xl text-lg w-10 h-10"
                />
              ))}
            </View>
          )}

          {/* Submit Button */}
          <View className="mt-2">
            <Pressable
              onPress={() => {
                if (!showOtpInput) {
                  setShowOtpInput(true);
                } else if (isOtpComplete) {
                  alert('Log In functionality is not implemented yet.');
                }
              }}
            >
              <Text
                className="bg-primary text-center text-white py-3 rounded-3xl font-okra-bold"
              >
                {isOtpComplete ? 'Log In' : 'Request OTP'}
              </Text>
            </Pressable>
          </View>

          <View className="mb-10">
            <Text className="font-okra text-sm text-center mt-4">Don't have an account?</Text>
            <Text
              className="text-sm text-primary font-okra-medium text-center"
              onPress={() => router.push('/sign-in')}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
