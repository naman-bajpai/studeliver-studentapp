import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { restaurants } from "@/constants/dummyData";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bookmark, Clock, Minus, Plus, Star, Truck } from "react-native-feather";
import BackArrow from "@/components/backArrow";
// Define the types for better type safety
type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isCustomizable: boolean;
  isVeg: boolean;
  customizationOptions: any[]; // You can create a more specific type for this if needed
};

type Restaurant = {
  id: number;
  name: string;
  tags: string[];
  discount: string;
  discountAmount: string;
  deliveryFee: string;
  rating: number;
  time: string;
  distance: string;
  imageUrl: string;
  color: string;
  address: string;
  phone: string;
  email: string;
  items: MenuItem[];
};

const FoodVendor = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [itemCounts, setItemCounts] = useState<Record<string, number>>({});
  const { id } = useLocalSearchParams(); // Get the id from the URL

  // Parse the id and find the restaurant
  const restaurantIndex = parseInt(String(id), 10);
  const selectedRestaurant: Restaurant =
    restaurants[restaurantIndex] || restaurants[0];

  // Increase item count
  const handleIncrease = (itemId: string) => {
    setItemCounts((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Decrease item count
  const handleDecrease = (itemId: string) => {
    setItemCounts((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: selectedRestaurant.color }}>
      {/* Status Bar */}
      
      <StatusBar
        backgroundColor={selectedRestaurant.color}
        barStyle="light-content"
        translucent={false}
      />

      {/* Header Section */}
      <BackArrow/>

      <View className="items-center h-1/4">
        <Image
          source={{ uri: selectedRestaurant.imageUrl }}
          className="w-full h-full mb-4"
          resizeMode="cover"
        />
      </View>

      {/* Menu Section */}
      <ScrollView
        overScrollMode="never"
        bounces={false}
        className="bg-white w-full h-full shadow-md rounded-t-3xl p-6 border border-gray-200"
      >
        {/* Restaurant Info */}
        <View className="flex flex-row justify-between px-2">
          <Text className="font-okra-bold text-4xl text-gray-800 mb-4">
            {selectedRestaurant.name}
          </Text>
          <TouchableOpacity onPress={() => setIsBookmarked((prev) => !prev)}>
            <Bookmark
              color={isBookmarked ? "#fd0" : "#000"}
              fill={isBookmarked ? "#fd0" : "#fff"}
              width={30}
              height={30}
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center space-x-1 px-2">

          {selectedRestaurant.tags.map((tag, index) => (
            <View key={index} className="flex flex-row items-center gap-3 mr-3">

              <Text className="font-okra text-sm text-gray-600 ml-1">{tag}</Text>
              {index !== selectedRestaurant.tags.length - 1 && <Text className="text-gray-600">•</Text>}
            </View>
          ))}
        </View>
        {/* Ratings */}
        <View className='px-2 items-center justify-between flex flex-row gap-2 my-4'>
          <View className=' items-center flex flex-row gap-2 bg-yellow-200 px-3 py-2 rounded-full'>

            <Star fill={'#fd0'} color={'#fc0'} />
            <Text className='font-okra-bold'>{selectedRestaurant.rating}</Text>
          </View>
          <View className='items-center flex flex-row gap-2 bg-sky-200 px-3 py-2 rounded-full'>
            <Clock fill={'#0df'} color={'#03f'} />
            <Text className='font-okra-bold'>{selectedRestaurant.time}</Text>
          </View>
          <View className='items-center flex flex-row gap-2 bg-lime-200 px-3 py-2 rounded-full'>
            <Truck fill={'#0d0'} color={'#080'} />
            <Text className='font-okra-bold'>{selectedRestaurant.time}</Text>
          </View>
        </View>
        {/* Render Menu Items */}
        {selectedRestaurant.items.map((item) => (
          <View key={item.id} className="flex-row rounded-lg mb-4">
            <Image
              source={{ uri: item.image }}
              className="w-24 h-24 rounded-lg mr-4"
            />
            <View className="flex-1 justify-center">
              <Text className="text-lg font-semibold text-gray-800">
                {item.name}
              </Text>
              {/* <Text className="text-sm font-semibold  text-gray-400">
                {item.description}
              </Text> */}
              <View className="flex-row items-center justify-between mt-4">
                {/* Price */}
                <Text className="text-sm text-gray-800 font-bold">
                  ${item.price.toFixed(2)}
                </Text>
                {/* Quantity Controls */}
                <View className="flex-row items-center">
                  {itemCounts[item.id] > 0 && (
                    <TouchableOpacity
                      onPress={() => handleDecrease(item.id)}
                      className="p-1 bg-red-100 rounded-full"
                    >
                      <Minus fill={"#f00"} color={"#d00"} />
                    </TouchableOpacity>
                  )}
                  {itemCounts[item.id] > 0 && (
                    <TextInput
                      value={String(itemCounts[item.id])}
                      editable={false}
                      className="text-sm text-center text-gray-800 w-8 border border-gray-300 rounded-md mx-2"
                    />
                  )}
                  <TouchableOpacity
                    onPress={() => handleIncrease(item.id)}
                    className="p-1 bg-lime-100 rounded-full"
                  >
                    <Plus fill={"#0d0"} color={"#080"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
         {/* Contact Section */}
         <View className="bg-white p-5 border-t border-gray-300 items-center mb-10">
          <Text className="text-lg font-bold text-gray-800 mb-4">Contact Us</Text>
          <Text className="text-base text-gray-600 mb-2">📍 {selectedRestaurant.address}</Text>
          <Text className="text-base text-gray-600 mb-2">📞 {selectedRestaurant.phone}</Text>
          <Text className="text-base text-gray-600 mb-4">📧 {selectedRestaurant.email}</Text>

          <TouchableOpacity className="bg-red-600 px-6 py-3 rounded-lg">
            <Text className="text-white text-base font-bold">Order Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodVendor;
