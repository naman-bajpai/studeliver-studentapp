import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Search, Grid, List } from 'react-native-feather'
import { categories, popularSearches } from '@/constants/dummyData'

const Explore = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white p-6 shadow-sm">
        <Text className="font-okra-bold text-2xl text-gray-900 mb-4">
          Explore Categories
        </Text>
        
        {/* Search Bar */}
        <View className="relative mb-4">
          <TextInput
            className="w-full bg-gray-50 h-12 rounded-xl px-12 font-okra text-gray-800
              border border-gray-200"
            placeholder="Search categories, cuisines, etc."
            placeholderTextColor="#9CA3AF"
          />
          <View className="absolute top-1/2 -translate-y-[50%] left-4">
            <Search color="#7B2FEF" width={20} height={20} />
          </View>
        </View>

        {/* View Toggle */}
        <View className="flex-row justify-end gap-2">
          <TouchableOpacity 
            onPress={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
          >
            <Grid color={viewMode === 'grid' ? '#7B2FEF' : '#6B7280'} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
          >
            <List color={viewMode === 'list' ? '#7B2FEF' : '#6B7280'} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 p-6">
        {/* Popular Searches */}
        <View className="mb-8">
          <Text className="font-okra-bold text-lg text-gray-900 mb-4">
            Popular Searches
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <TouchableOpacity 
                key={index}
                className="bg-white px-4 py-2 rounded-full border border-gray-200"
              >
                <Text className="font-okra text-gray-700">{search}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categories Grid/List */}
        <View>
          <Text className="font-okra-bold text-lg text-gray-900 mb-4">
            All Categories
          </Text>
          <View className={`flex-row flex-wrap ${
            viewMode === 'grid' ? 'gap-4' : 'flex-col gap-2'
          }`}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                className={`${
                  viewMode === 'grid'
                    ? 'w-[calc(50%-8px)] bg-white rounded-xl p-4 shadow-sm'
                    : 'w-full bg-white rounded-xl p-4 flex-row items-center shadow-sm'
                }`}
              >
                <Image
                  source={{ uri: category.image }}
                  className={`${
                    viewMode === 'grid'
                      ? 'w-full h-32 rounded-lg mb-3'
                      : 'w-20 h-20 rounded-lg mr-4'
                  }`}
                  resizeMode="cover"
                />
                <View>
                  <Text className="font-okra-bold text-gray-900 text-lg">
                    {category.name}
                  </Text>
                  <Text className="font-okra text-gray-500">
                    {category.itemCount} items
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore