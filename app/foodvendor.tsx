import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const FoodVendor = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="items-center bg-white p-5 border-b border-gray-300">
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150' }} // Replace with Chick-fil-A's logo or an actual image
          className="w-72 h-36 mb-4"
          resizeMode="contain"
        />
        <Text className="text-xl font-bold text-gray-800">Welcome to Chick-fil-A</Text>
        <Text className="text-base text-gray-600 text-center px-5 mt-2">
          Known for our delicious chicken sandwiches, waffle fries, and exceptional service!
        </Text>
      </View>

      {/* Menu Section */}
      <View className="p-5">
        <Text className="text-lg font-bold text-gray-800 mb-4">Our Menu</Text>
        
        {/* Menu Item 1 */}
        <View className="flex-row bg-white rounded-lg shadow-md mb-4 p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with an actual food image
            className="w-24 h-24 rounded-lg mr-4"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-800">Chicken Sandwich</Text>
            <Text className="text-sm text-gray-600 mt-2">
              A perfectly seasoned and crispy chicken breast served on a toasted buttered bun.
            </Text>
          </View>
        </View>

        {/* Menu Item 2 */}
        <View className="flex-row bg-white rounded-lg shadow-md mb-4 p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with an actual food image
            className="w-24 h-24 rounded-lg mr-4"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-800">Waffle Fries</Text>
            <Text className="text-sm text-gray-600 mt-2">
              Crispy and golden waffle-shaped fries, a fan favorite!
            </Text>
          </View>
        </View>

        {/* Menu Item 3 */}
        <View className="flex-row bg-white rounded-lg shadow-md mb-4 p-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with an actual food image
            className="w-24 h-24 rounded-lg mr-4"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-800">Lemonade</Text>
            <Text className="text-sm text-gray-600 mt-2">
              Freshly squeezed lemonade made with real lemons.
            </Text>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View className="bg-white p-5 border-t border-gray-300 items-center">
        <Text className="text-lg font-bold text-gray-800 mb-4">Contact Us</Text>
        <Text className="text-base text-gray-600 mb-2">📍 123 Chick-fil-A Lane, Food City</Text>
        <Text className="text-base text-gray-600 mb-2">📞 (123) 456-7890</Text>
        <Text className="text-base text-gray-600 mb-4">📧 contact@chickfila.com</Text>

        <TouchableOpacity className="bg-red-600 px-6 py-3 rounded-lg">
          <Text className="text-white text-base font-bold">Order Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FoodVendor;