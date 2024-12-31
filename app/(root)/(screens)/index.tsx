

import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MapPin,
  Bell,
  ChevronDown,
  Search,
  Sliders,
  Clock,
  X,
  User
} from 'react-native-feather';
import images from '@/constants/exportsImages';
import { recommendedListData } from '@/constants/dummyData';
import TabsComponent from '@/components/ui/HomeTabs';
import { router } from 'expo-router';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const [filters, setFilters] = useState({
    category: 'Food',
    foodGroup: 'Cereals',
    rating: '',
    priceRange: '',
  });

  const handleCategorySelect = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };
  const handleFoodGroupSelect = (foodGroup: string) => {
    setFilters((prev) => ({
      ...prev,
      foodGroup,
    }));
  };

  const categories = ['Food', 'Drinks', 'Desserts'];

  const foodGroups = [
    { id: 1, name: 'Cereals' },
    { id: 2, name: 'Vegetables' },
    { id: 3, name: 'Fruits' },
    { id: 4, name: 'Dairy' },
    { id: 5, name: 'Protein' },
    { id: 6, name: 'Fats' },
    { id: 7, name: 'Sweets' },
    { id: 8, name: 'Beverages' },
    { id: 9, name: 'Seafood' },
    { id: 10, name: 'Legumes' },
    { id: 11, name: 'Snacks' },
    { id: 12, name: 'Nuts' },
  ];


  const handleProfileClick = () => {
    router.push('/profile')
  }

  return (
    <SafeAreaView className="font-okra flex h-screen flex-col items-center">
      {/* Change StatusBar dynamically */}
      <StatusBar barStyle={modalVisible ? 'dark-content' : 'light-content'} backgroundColor={modalVisible ? '#38008d' : '#5e17eb'} />
      <StatusBar barStyle={modalVisible ? 'dark-content' : 'light-content'} backgroundColor={modalVisible ? '#38008d' : '#5e17eb'} />

      {/* Main Content */}
      <View className="bg-primary p-6 flex-col flex gap-3 w-full rounded-b-3xl">
        {/* Address settings and notification */}
        <View className="flex justify-between items-center h-fit flex-row bg-primary w-full">
          <View className="flex-row flex gap-2 items-center justify-start">
            <MapPin color="#fff" />
            <Text className="font-okra-medium text-white">Deliver to</Text>
            <View className="flex flex-row">
              <Text className="font-okra-bold underline text-yellow-200">Home</Text>
              <ChevronDown width={18} height={20} color="#fef08a" />
            </View>
          </View>
          <View className='flex gap-2 flex-row'>
            <Bell color="#fff" width={24} height={24} />
            <TouchableOpacity onPress={handleProfileClick}>

            <User color="#fff" width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="relative">
          <TextInput
            className="w-full flex justify-center bg-white items-center h-12 rounded-md px-12"
            placeholder="Search for a restaurant"
          />
          <View className="absolute top-1/2 -translate-y-[50%] left-2">
            <Search color="#5e17eb" />
          </View>
          <Pressable
            className="absolute top-1/2 -translate-y-[50%] right-2"
            onPress={() => setModalVisible((prevState) => !prevState)}
          >
            <Sliders color="#5e17eb" />
          </Pressable>
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
      <View className="bg-light w-full p-6">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="font-okra-bold text-lg">Favourite</Text>
          <Text className="font-okra text-black-200">See all</Text>
        </View>

        {/* Horizontal Scrollable Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row py-1"
        >
          {recommendedListData.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              className="bg-white border border-gray-200 rounded-lg p-3 mr-4 min-w-56 shadow-black shadow-lg drop-shadow-lg"
            >
              <View className="relative">
                <Image
                  source={{ uri: restaurant.imageUrl }}
                  className="h-32 w-full rounded-lg mb-2"
                  resizeMode="cover"
                />
                <View className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-full">
                  <Text className="text-white font-okra-bold text-xs">
                    {restaurant.discount}
                  </Text>
                </View>
              </View>

              <Text className="font-okra-bold text-base text-gray-800 truncate">
                {restaurant.name}
              </Text>
              <View className="flex flex-row justify-between items-center">
                <View className="px-0.5 rounded-lg">
                  <Text>⭐{restaurant.rating}</Text>
                </View>
                <View className="flex flex-row gap-2 mt-2">
                  <View className="flex items-center">
                    <Text className="bg-pink-200 px-2 rounded-full w-fit font-okra text-sm text-danger">
                      {restaurant.distance}
                    </Text>
                  </View>
                  <View className="flex flex-row gap-1 bg-pink-200 px-2 rounded-full justify-between items-center">
                    <Clock color="#F75555" width={12} height={12} />
                    <Text className="w-fit font-okra text-sm text-danger">
                      {restaurant.time}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          
        </ScrollView>


      </View>
      

      <View className='bg-white w-full p-6'>
      <View className='flex h-full'>
            <TabsComponent />
          </View>
      </View>
      {/* Dark Overlay */}
      {modalVisible && <View style={styles.overlay} />}

      {/* Filter Modal */}
      <Modal
        transparent

        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Bottom Sheet */}
        <View style={styles.modalContainer}>
          <View className="bg-white rounded-t-3xl p-6 h-[85%] shadow-lg">
            <View className='flex flex-row gap-2'><Pressable><X color={'#000'} onPress={() => setModalVisible(false)} /></Pressable><Text className="font-okra-bold text-lg mb-4">Filter Options</Text></View>

            <View className='p-3 flex flex-col gap-2 '>
              <View className='my-2 gap-2 flex-col flex'>

                <Text className='font-okra'>Category</Text>
                <View className="flex flex-row gap-2 justify-between">
                  {categories.map((category) => (
                    <TouchableOpacity
                      key={category}
                      onPress={() => handleCategorySelect(category)}
                      className={`px-8 py-2 w-1/3 rounded-lg border ${filters.category === category
                        ? 'bg-primary border-primary'
                        : 'bg-gray-200 border-gray-300'
                        }`}
                    >
                      <Text
                        className={` font-medium text-center ${filters.category === category ? 'text-white font-okra-bold' : 'text-gray-700'
                          }`}
                      >
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View className='my-2 gap-2 flex-col flex'>

                <Text className='font-okra'>Food Groups</Text>
                <View className="flex flex-row flex-wrap gap-2 justify-start">
                  {foodGroups.map((group) => (
                    <TouchableOpacity
                      key={group.id}
                      onPress={() => handleFoodGroupSelect(group.name)}
                      className={`px-8 py-2 rounded-lg border ${filters.foodGroup === group.name
                        ? 'bg-primary border-primary'
                        : 'bg-gray-200 border-gray-300'
                        }`}
                    >
                      <Text
                        className={` font-medium text-center ${filters.foodGroup === group.name ? 'text-white font-okra-bold' : 'text-gray-700'
                          }`}
                      >
                        {group.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View className="my-2 gap-2 flex-col flex">
                <Text className="font-okra">Rating</Text>
                <View className="flex flex-row gap-2 justify-between">
                  {["1", "2", "3", "4", "5"].map((rating) => (
                    <TouchableOpacity
                      key={rating}
                      onPress={() => setFilters((prev) => ({ ...prev, rating }))}
                      className={`px-3 py-2 rounded-lg ${filters.rating === rating
                        ? 'bg-primary border-primary'
                        : 'bg-white '
                        }`}
                    >
                      <Text
                        className={`text-sm font-medium ${filters.rating === rating ? 'text-white' : 'text-gray-700'
                          }`}
                      >
                        {rating} ⭐
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View className="my-2 gap-2 flex-col flex">
                <Text className="font-okra">Price Range</Text>
                <View className="flex flex-row gap-2 justify-between ">
                  {['$', '$$', '$$$', '$$$$', '$$$$$'].map((price, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setFilters((prev) => ({ ...prev, priceRange: price }))}
                      className={`px-3 py-2 rounded-lg border w-1/6  ${filters.priceRange === price
                        ? 'bg-primary border-primary'
                        : 'bg-gray-200 border-gray-300'
                        }`}
                    >
                      <Text
                        className={`text-sm font-medium text-center ${filters.priceRange === price ? 'text-white' : 'text-gray-700'
                          }`}
                      >
                        {price}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="bg-primary p-3 rounded-lg items-center mt-auto"
            >
              <Text className="text-white font-okra-bold">Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
