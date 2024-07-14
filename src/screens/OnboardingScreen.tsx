import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function OnboardingScreen({
  navigation,
}: NativeStackScreenProps<any, 'Onboarding'>) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text variant="titleLarge" style={styles.title}>
          Welcome to Ngops!
        </Text>
        <Text variant="bodyMedium" style={styles.description}>
          Find the best coffee shops to enjoy your coffee.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.replace('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#795548',
  },
  content: {
    flex: 0.9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 1.5,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  footer: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 8,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: '#795548',
    fontWeight: 'bold',
  },
});
