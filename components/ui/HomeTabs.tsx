import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

// Dummy data for restaurants
import { recommendedListData } from "@/constants/dummyData"; // Update the import path

// Define a type for the tab keys
type TabKey = "recent" | "favourite" | "trending" | "popular";

// Generate random subsets for each tab
const generateTabData = () => {
  const shuffledData = [...recommendedListData].sort(() => 0.5 - Math.random());
  return {
    recent: shuffledData.slice(0, 3),
    favourite: shuffledData.slice(3, 6),
    trending: shuffledData.slice(6, 9),
    popular: shuffledData.slice(9, 12),
  };
};

// Initialize tab data
const restaurants: Record<TabKey, typeof recommendedListData> = generateTabData();

const TabsComponent = () => {
  // Specify the type for selectedTab as TabKey
  const [selectedTab, setSelectedTab] = useState<TabKey>("recent");

  return (
    <View className="flex-1 ">
      {/* Tabs */}
      <View className="flex-row justify-between mb-4">
        {(["recent", "favourite", "popular", "trending"] as TabKey[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`px-4 py-2 rounded ${
              selectedTab === tab ? "bg-black-100/10" : ""
            }`}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              className={`text-sm font-semibold font-okra ${
                selectedTab === tab ? "text-primary font-okra-bold" : "text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Restaurant List */}
      <FlatList
        data={restaurants[selectedTab]} // Use the tab-specific data
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center mb-4  px-2 rounded-lg  py-2  ">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-20 h-20  rounded mr-4"
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="font-okra-bold text-lg text-black">{item.name}</Text>
              <Text className="text-gray-500 font-okra">{`${item.time} | ${item.distance}`}</Text>
              <Text className="text-gray-700 font-okra">{item.discount}</Text>
            </View>
            <Text className="text-primary font-semibold font-okra">{item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TabsComponent;
