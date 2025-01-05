// components/BackArrow.tsx
import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import images from '@/constants/exportsImages';


const BackArrow: React.FC = () => {
  return (
    <Pressable
      onPress={() => router.replace('/')}
      style={styles.container}
    >
      <Image
        source={images.backArrow}
        style={styles.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10, // Standard top position
    left: 10, // Standard left position
    zIndex: 20, // Ensure it stays on top of other components
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default BackArrow;