import { View, Text, SafeAreaView, Image, TouchableOpacity, Switch } from 'react-native';
import { ArrowLeft, Bell, Truck, Gift, MapPin, DollarSign, User, ChevronRight, CreditCard, LogOut } from 'react-native-feather';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import images from '@/constants/exportsImages';

const Profile = () => {
  const router = useRouter();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isPromoNotificationsEnabled, setIsPromoNotificationsEnabled] = useState(false);

  const handleSignOut = () => {
    // Implement your sign-out logic here
    console.log("User signed out");
    router.replace("/log-in"); // Example: Redirect to the login screen
  };

  return (
    <SafeAreaView className="h-full bg-gray-200">
      {/* Header + Profile Area with Extended Purple Background */}
      <View className="bg-[#5e17eb]">
        {/* Header */}
        <View className="flex flex-row justify-between p-2 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft color="#fff" />
          </TouchableOpacity>
          <Text className="font-okra-bold text-lg text-white">Profile</Text>
          <Bell color="#fff" />
        </View>

        {/* Profile Info */}
        <View className="flex flex-row p-6 items-center gap-4">
          <Image
            source={images.Avatar}
            width={40}
            height={40}
            alt="Profile"
            className="rounded-full w-24 h-24 border-2 border-light"
          />
          <View className="flex flex-col space-y-2">
            <Text className="font-okra-medium text-light text-2xl">Naman Bajpai</Text>
            <Text className="font-okra text-light text-lg">namanbajpai@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="bg-[#5e17eb] p-6 pt-3">
        <View className="bg-light rounded-2xl p-3 flex flex-row justify-between items-center px-10">
          <TouchableOpacity>
            <View className="flex flex-col justify-center items-center gap-1">
              <Truck color="#5e17eb" />
              <Text className="text-wrap max-w-20 text-center text-[#5e17eb]">My All Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-col justify-center items-center gap-1">
              <DollarSign color="#5e17eb" />
              <Text className="text-wrap max-w-20 text-center text-[#5e17eb]">Meal Swipes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-col justify-center items-center gap-1">
              <Gift color="#5e17eb" />
              <Text className="text-wrap max-w-20 text-center text-[#5e17eb]">Offers & Promo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex flex-col justify-center items-center gap-1">
              <MapPin color="#5e17eb" />
              <Text className="text-wrap max-w-20 text-center text-[#5e17eb]">Delivery Address</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account and Notifications */}
      <View className="bg-gray-200 p-6">
        <View className="rounded-2xl bg-light shadow-md border border-gray-300 p-6">
          {/* Account Section */}
          <View className="flex flex-col my-2">
            <Text className="font-okra-bold text-black text-lg mb-2">My account</Text>
            <View className="flex flex-row gap-2 items-center w-full my-2">
              <User color="#5e17eb" />
              <Text className="font-okra text-black mr-auto text-base">Manage Profile</Text>
              <ChevronRight color="#5e17eb" />
            </View>
            <View className="flex flex-row gap-2 items-center w-full my-2">
              <CreditCard color="#5e17eb" />
              <Text className="font-okra text-black mr-auto text-base">Payment Option</Text>
              <ChevronRight color="#5e17eb" />
            </View>
          </View>

          {/* Notifications Section */}
          <View className="flex flex-col my-2">
            <Text className="font-okra-bold text-black text-lg mb-2">Notifications</Text>
            <View className="flex flex-row gap-2 items-center w-full">
              <Bell color="#5e17eb" />
              <Text className="font-okra text-black mr-auto text-base">Enable Notifications</Text>
              <Switch
                value={isNotificationsEnabled}
                onValueChange={setIsNotificationsEnabled}
              />
            </View>
            <View className="flex flex-row gap-2 items-center w-full">
              <Gift color="#5e17eb" />
              <Text className="font-okra text-black mr-auto text-base">Promotional Notifications</Text>
              <Switch
                value={isPromoNotificationsEnabled}
                onValueChange={setIsPromoNotificationsEnabled}
              />
            </View>
          </View>

          <View className="bg-light rounded-2xl mt-auto flex flex-col items-start">
            <Text className="font-okra-bold text-black text-lg mb-2">More</Text>
            <TouchableOpacity onPress={handleSignOut} className="flex flex-row items-center gap-4">
              <LogOut color="#F75555" />
              <Text className="font-okra-bold text-danger text-base">Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;