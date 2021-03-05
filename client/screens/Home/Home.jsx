import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './Home.style';

export default function Home({ userPlants }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Today</Text>
        <Text style={styles.notice}>Your plants are all happy! 😊</Text>
      </View>
    </SafeAreaView>
  );
}
