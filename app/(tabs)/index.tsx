import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function WelcomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFD700', dark: '#4B3F00' }}
      headerImage={<View style={styles.placeholderHeader} />}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.welcomeText}>
          Welcome to Studeliver!
        </ThemedText>
        <ThemedText style={styles.description}>
          Your one-stop solution for peer-to-peer food delivery. Join us in connecting students and making campus life more convenient.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  placeholderHeader: {
    height: 120,
    backgroundColor: '#FFD700',
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});
