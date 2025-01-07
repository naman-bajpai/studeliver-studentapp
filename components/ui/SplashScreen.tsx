import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const SplashScreenAnimation = () => {
  // Animation values for vertical movement and scaling
  const logoTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo animation with vertical movement and scaling
    Animated.sequence([
          
          Animated.timing(logoTranslateY, {
            toValue: -400, // Move back upwards
            duration: 700,
            useNativeDriver: true,
          }),
        ]).start();
  }, [logoTranslateY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/studeliverlogo.png')}
        style={[
          styles.logo,
          {
            transform: [
              { translateY: logoTranslateY },
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
