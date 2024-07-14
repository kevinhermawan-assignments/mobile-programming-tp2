import React, { useEffect } from 'react';
import { Dimensions, Image, Linking, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import data from '../assets/data';

export default function DetailScreen({
  route,
  navigation,
}: NativeStackScreenProps<any, 'Detail'>) {
  const width = Dimensions.get('window').width;
  const paramsItem = route.params?.item as (typeof data)[0];

  useEffect(() => {
    navigation.setOptions({ title: paramsItem.name });
  }, [paramsItem.name, navigation]);

  return (
    <View style={styles.container}>
      <View style={{ width: width, height: width / 1.5 }}>
        <Carousel
          loop={true}
          autoPlay={true}
          width={width}
          height={width / 1.5}
          data={paramsItem.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, height: width / 1.5 }}
            />
          )}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Card mode="outlined" style={styles.card}>
            <Text style={styles.cardTitle}>Name</Text>
            <Card.Content>
              <Text>{paramsItem.name}</Text>
            </Card.Content>
          </Card>
          <Card mode="outlined" style={styles.card}>
            <Text style={styles.cardTitle}>Address</Text>
            <Card.Content>
              <Text>{paramsItem.address}</Text>
            </Card.Content>
          </Card>
        </View>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => Linking.openURL(paramsItem.googleMapsUrl)}>
          <Text style={styles.buttonText}>Open in Google Maps</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 16,
    borderColor: '#DDDDDD',
  },
  cardTitle: {
    padding: 16,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: '#795548',
  },
  button: {
    padding: 8,
    width: '100%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
