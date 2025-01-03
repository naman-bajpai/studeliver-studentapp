import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const SplashScreenAnimation = () => {
  // Animation values for vertical movement and scaling
  const logoTranslateY = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Logo animation with vertical movement and scaling
    Animated.loop(
      Animated.parallel([
        // Vertical movement animation
        Animated.sequence([
          Animated.timing(logoTranslateY, {
            toValue: 20, // Move downwards
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(logoTranslateY, {
            toValue: 0, // Move back upwards
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        // Scaling animation
        Animated.sequence([
          
          Animated.timing(logoScale, {
            toValue: 1.2, // Return to original scale
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(logoScale, {
            toValue: 0, // Return to original scale
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [logoTranslateY, logoScale]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/studeliverlogo.png')}
        style={[
          styles.logo,
          {
            transform: [
              { translateY: logoTranslateY },
              { scale: logoScale },
            ],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreenAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 200,
  },
});
