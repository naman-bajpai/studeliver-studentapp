import { router } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  FlatList, 
  Dimensions,
  Animated,
  Platform,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import images from '@/constants/exportsImages';

const { width, height } = Dimensions.get('window');

interface Card {
  id: string;
  text: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const logoFadeAnim = useRef(new Animated.Value(0)).current;

  const cards: Card[] = [
    { 
      id: '1', 
      text: 'Fast Delivery', 
      description: 'Get your favorite meals delivered right to your doorstep in minutes!',
      icon: 'bicycle-outline'
    },
    { 
      id: '2', 
      text: 'Student Discounts', 
      description: 'Exclusive deals and discounts for university students. Save more on every order!',
      icon: 'school-outline'
    },
    { 
      id: '3', 
      text: 'Variety of Options', 
      description: 'Explore a diverse range of cuisines from top-rated on-campus dining options.',
      icon: 'restaurant-outline'
    },
  ];

  useEffect(() => {
    // Initial animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoFadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-scroll timer
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % cards.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSignIn = () => {
    router.replace('/log-in');
  };

  const handleSignUp = () => {
    router.replace('/sign-up');
  };

  const renderDots = () => {
    return (
      <View style={styles.pagination}>
        {cards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#5e17eb' : '#d4d4d4' }
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Logo Section */}
      <Animated.View style={[styles.logoContainer, { opacity: logoFadeAnim }]}>
        <Image 
          source={images.logo_transparent_cropped}
          style={styles.logo}
          resizeMode="contain"  
           />
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <View style={styles.cardsContainer}>
          <FlatList
            ref={flatListRef}
            data={cards}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setActiveIndex(newIndex);
            }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <Ionicons name={item.icon} size={40} color="#5e17eb" />
                </View>
                <Text style={styles.cardText}>{item.text}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            )}
          />
          {renderDots()}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Already have an account? Sign In</Text>
          </TouchableOpacity>  
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    paddingBottom: 20,
    height: height * 0.15, 
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.75, 
    height: height * 0.08, 
    maxHeight: 30, 
    minHeight: 30, 
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20, // Add some padding to separate from logo
  },
  cardsContainer: {
    height: height * 0.45, // Slightly reduce height to accommodate larger logo
    justifyContent: 'center',
  },
  card: {
    width: width,
    paddingHorizontal: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#5e17eb',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cardText: {
    fontSize: 28,
    fontFamily: 'okra-bold',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: 'okra',
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 24 : 32,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#5e17eb',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#5e17eb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'okra-bold',
  },
  secondaryButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#5e17eb',
    fontSize: 16,
    fontFamily: 'okra',
  },
});