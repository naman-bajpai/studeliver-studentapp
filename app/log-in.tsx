import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import images from '@/constants/exportsImages';
import { router } from 'expo-router';

const Login: React.FC = () => {
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);
  const [cooldown, setCooldown] = useState<number>(0); // Cooldown state for the button
  const inputRefs = useRef<TextInput[]>([]); // Reference for OTP input fields

  // Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last character (for numeric inputs)
    setOtp(newOtp);

    // Automatically focus the next input field if available
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    setIsOtpComplete(newOtp.every((digit) => digit !== ''));
  };

  // Handle backspace logic
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current field
      setOtp(newOtp);
    }
  };

  // Start cooldown when button is pressed
  const handleRequestOtp = () => {
    if (cooldown === 0) {
      setShowOtpInput(true);
      setCooldown(60); // Start a 60-second cooldown
    }
  };

  // Countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

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
                  ref={(ref) => (inputRefs.current[index] = ref!)} // Store ref for each input
                  maxLength={1}
                  keyboardType="numeric"
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)} // Handle backspace navigation
                  className="font-okra text-center border border-gray-500 text-black p-4 rounded-xl text-lg w-16 "
                />
              ))}
            </View>
          )}

          {/* Submit Button */}
          <View className="mt-2">
            <Pressable
              onPress={handleRequestOtp}
              disabled={cooldown > 0} // Disable button during cooldown
            >
              <Text
                className={`text-center py-3 rounded-3xl font-okra-bold ${
                  cooldown > 0
                    ? 'bg-gray-400 text-gray-700' // Cooldown button style
                    : 'bg-primary text-white' // Active button style
                }`}
              >
                {cooldown > 0 ? `Request OTP in ${cooldown} sec` : 'Request OTP'}
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
