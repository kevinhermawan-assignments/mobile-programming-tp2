/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import data from '../assets/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<any, 'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => (
          <Card
            mode="outlined"
            onPress={() => navigation.navigate('Detail', { item })}
            style={{
              ...styles.card,
              marginTop: index === 0 ? 16 : 8,
              marginBottom: index === data.length - 1 ? 16 : 8,
            }}>
            <Card.Cover
              resizeMode="cover"
              source={{ uri: item.images[0] }}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Text variant="titleLarge">{item.name}</Text>
              <Text variant="bodyMedium">{item.address}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderColor: '#DDDDDD',
    marginHorizontal: 16,
  },
  cardCover: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardContent: {
    padding: 16,
  },
});
