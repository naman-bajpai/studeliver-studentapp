



import React, { useState, useRef } from 'react';
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
  PanResponder,
  Animated,
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
  User,
} from 'react-native-feather';
import images from '@/constants/exportsImages';
import { recommendedListData } from '@/constants/dummyData';
import TabsComponent from '@/components/ui/HomeTabs';
import { router } from 'expo-router';
import { navTabs, foodGroups, categories } from '@/constants/dummyData';

interface NavFilters {
  label: string;
}

export default function Index() {
  // Varaiables
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [searchText, setSearchText] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('Home');
  const [pickupAddress, setPickupAddress] = useState('');
  const [pan, setPan] = useState(new Animated.Value(-10)); // Track the vertical position
  const [activeNavTab, setActiveNavtab] = useState("")
  const closeThreshold = 100; // Set a threshold for dragging down to close the modal
  const [activeNavFilter, setActiveNavFilter] = useState<NavFilters[]>([]);
  const [navFilters, setNavFilters] = useState<NavFilters[]>(navTabs);
  const [filters, setFilters] = useState({
    category: 'Food',
    foodGroup: 'Cereals',
    rating: '',
    priceRange: '',
  });

  const handleNavFilterClick = (tab: NavFilters) => {
    if (activeNavFilter.some((activeTab) => activeTab.label === tab.label)) {
      // If the tab is already active, remove it from activeNavFilter and add it back to navFilters
      setActiveNavFilter((prev) =>
        prev.filter((activeTab) => activeTab.label !== tab.label)
      );
      setNavFilters((prev) => [...prev, tab]);
    } else {
      // If the tab is not active, add it to activeNavFilter and remove it from navFilters
      setActiveNavFilter((prev) => [...prev, tab]);
      setNavFilters((prev) =>
        prev.filter((filterTab) => filterTab.label !== tab.label)
      );
    }
  };

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

  // Gesture handling to detect dragging

  // Create PanResponder
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // Restrict vertical movement (only allow dragging downwards)
      if (gestureState.dy > 0) {
        pan.setValue(gestureState.dy); // Track the downward movement
      } else {
        pan.setValue(0); // Prevent upward movement
      }

      // Close the modal instantly if it crosses the threshold
      if (gestureState.dy > closeThreshold) {
        setModalVisible(false); // Close the modal immediately
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      // Return the modal to the original position without any delay
      if (gestureState.dy <= closeThreshold) {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const showModal = () => {
    setModalVisible(true);
    Animated.spring(pan, {
      toValue: 0, // Move to the screen position
      useNativeDriver: true,
    }).start();
  };

  const handleModalClose = () => {
    setModalVisible(false);
    Animated.spring(pan, {
      toValue: 0, // Move below the screen
      useNativeDriver: true,
    }).start();
  };

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleDeliveryMethodChange = (method: 'delivery' | 'pickup') => {
    setDeliveryMethod(method);
    setSearchText('');
    setFilters({
      category: 'Food',
      foodGroup: 'Cereals',
      rating: '',
      priceRange: '',
    });
  };

  return (
    <SafeAreaView className="font-okra flex h-screen flex-col items-center" style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle={modalVisible ? 'dark-content' : 'light-content'} backgroundColor={modalVisible ? '#38008d' : '#5e17eb'} />

      <View className="bg-primary p-6 flex-col flex gap-3 w-full rounded-b-3xl ">
        {/* Address settings and notification */}
        <View className="flex justify-between items-center h-fit flex-row bg-primary  w-full">
          <View className="flex-row flex gap-2 items-center justify-start">
            <MapPin color="#fff" />
            <Text className="font-okra-medium text-white">Deliver to</Text>
            <View className="flex flex-row">
              <Text className="font-okra-bold underline text-yellow-200">Home</Text>
              <ChevronDown width={18} height={20} color="#fef08a" />
            </View>
          </View>
          <View className="flex flex-row justify-center bg-white/20 rounded-full p-0.5">
            <TouchableOpacity
              onPress={() => handleDeliveryMethodChange('delivery')}
              className={` py-1 px-4 rounded-full ${deliveryMethod === 'delivery' ? 'bg-white' : 'bg-transparent'
                }`}
            >
              <Text
                className={`text-center font-okra-medium ${deliveryMethod === 'delivery' ? 'text-primary' : 'text-white'
                  }`}
              >
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeliveryMethodChange('pickup')}
              className={` py-1 px-4 rounded-full ${deliveryMethod === 'pickup' ? 'bg-white' : 'bg-transparent'
                }`}
            >
              <Text
                className={`text-center font-okra-medium ${deliveryMethod === 'pickup' ? 'text-primary' : 'text-white'
                  }`}
              >
                Pickup
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex gap-2 flex-row">
            <Bell color="#fff" width={24} height={24} />
            <TouchableOpacity onPress={handleProfileClick}>
              <User color="#fff" width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="relative">
          <TextInput className="w-full flex justify-center bg-white items-center h-12 rounded-md px-12" placeholder={`Search for a ${deliveryMethod === 'delivery' ? 'restaurant' : 'store'}`} />
          <View className="absolute top-1/2 -translate-y-[50%] left-2">
            <Search color="#5e17eb" />
          </View>
          <Pressable
            className="absolute top-1/2 -translate-y-[50%] right-2"
            onPress={showModal} // Use showModal to open with animation
          >
            <Sliders color="#5e17eb" />
          </Pressable>
        </View>
        {/* Implement the pickup address selection here */}

        <View className='flex w-full '>

          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',

            }}>
            {/* Active Filters */}
            {activeNavFilter.map((tab, index) => (
              <Pressable
                key={index}
                onPress={() => handleNavFilterClick(tab)}
                className={`py-2 mr-2 px-4 rounded-full border border-white ${activeNavFilter.some((activeTab) => activeTab.label === tab.label) ? 'bg-white' : 'bg-primary'
                  }`}
              >
                <Text
                  className={`text-center font-okra-medium ${activeNavFilter.some((activeTab) => activeTab.label === tab.label) ? 'text-primary' : 'text-white'
                    }`}
                >
                  {tab.label}
                </Text>
              </Pressable>
            ))}

            {/* Available Filters */}
            {navFilters.map((tab, index) => (
              <Pressable
                key={index}
                onPress={() => handleNavFilterClick(tab)}
                className={`py-2 mr-2 px-4 rounded-full border border-white ${activeNavFilter.some((activeTab) => activeTab.label === tab.label) ? 'bg-white' : 'bg-primary'
                  }`}
              >
                <Text
                  className={`text-center font-okra-medium ${activeNavFilter.some((activeTab) => activeTab.label === tab.label) ? 'text-primary' : 'text-white'
                    }`}
                >
                  {tab.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>

      <View className="bg-light w-full p-6">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="font-okra-bold text-lg">Favourite</Text>
          <Text className="font-okra text-black-200">See all</Text>
        </View>

        {/* Horizontal Scrollable Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', paddingHorizontal: 0 }}>
          {recommendedListData.map((restaurant) => (
            <TouchableOpacity key={restaurant.id} className="bg-white rounded-lg p-3 mr-4 min-w-56">
              <View className="relative">
                <Image source={{ uri: restaurant.imageUrl }} className="h-32 w-full rounded-lg mb-2" resizeMode="cover" />
                <View className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-full">
                  <Text className="text-white font-okra-bold text-xs">{restaurant.discount}</Text>
                </View>
              </View>

              <Text className="font-okra-bold text-base text-gray-800 truncate">{restaurant.name}</Text>
              <Text className="font-okra text-sm text-gray-600 mt-1">
                {restaurant.distance} - ${restaurant.deliveryFee} Delivery fee - {restaurant.time}
              </Text>

              <View className="flex flex-row justify-between items-center mt-2">
                <View className="px-0.5 rounded-lg">
                  <Text>⭐{restaurant.rating}</Text>
                </View>
                <View className="flex flex-row gap-2 mt-2">
                  <View className="flex items-center">
                    <Text className="bg-pink-200 px-2 rounded-full w-fit font-okra text-sm text-danger">{restaurant.distance}</Text>
                  </View>
                  <View className="flex flex-row gap-1 bg-pink-200 px-2 rounded-full justify-between items-center">
                    <Clock color="#F75555" width={12} height={12} />
                    <Text className="w-fit font-okra text-sm text-danger">{restaurant.time}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View className="bg-white w-full p-6">
        <View className="flex h-full">
          <TabsComponent />
        </View>
      </View>

      {/* Dark Overlay */}
      {modalVisible && <View style={styles.overlay} />}

      <Modal transparent animationType="slide" visible={modalVisible} onRequestClose={handleModalClose}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY: pan }] }]}
          {...panResponder.panHandlers}
        >
          <View className="bg-white rounded-t-3xl p-6 shadow-lg">
            <View className="flex flex-row gap-2">
              <Pressable>
                <X color="#000" onPress={handleModalClose} />
              </Pressable>
              <Text className="font-okra-bold text-lg mb-4">Filter Options</Text>
            </View>

            <View className="p-3 flex flex-col gap-2">
              <View className="my-2 gap-2 flex-col flex">
                <Text className="font-okra">Category</Text>
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
                        className={`font-medium text-center ${filters.category === category
                          ? 'text-white font-okra-bold'
                          : 'text-gray-700'
                          }`}
                      >
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View className="my-2 gap-2 flex-col flex">
                <Text className="font-okra">Food Groups</Text>
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
                        className={`font-medium text-center ${filters.foodGroup === group.name
                          ? 'text-white font-okra-bold'
                          : 'text-gray-700'
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
                        className={`text-sm font-medium ${filters.rating === rating
                          ? 'text-white'
                          : 'text-gray-700'
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
                <View className="flex flex-row gap-2 justify-between">
                  {['$', '$$', '$$$', '$$$$', '$$$$$'].map((price, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setFilters((prev) => ({ ...prev, priceRange: price }))}
                      className={`px-3 py-2 rounded-lg border w-1/6 ${filters.priceRange === price
                        ? 'bg-primary border-primary'
                        : 'bg-gray-200 border-gray-300'
                        }`}
                    >
                      <Text
                        className={`text-sm font-medium text-center ${filters.priceRange === price
                          ? 'text-white'
                          : 'text-gray-700'
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
        </Animated.View>
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
