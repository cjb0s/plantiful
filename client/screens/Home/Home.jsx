import moment from 'moment';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './Home.style';

export default function Home({ userPlants }) {
  const checkSchedule = (plants) => {
    // plants.forEach((plant) => console.log(plant.next_water));

    const filtered = plants.filter(
      (plant) =>
        moment(plant.next_water).add(1, 'days').format('Do MMM YYYY') ===
        moment().format('Do MMM YYYY'),
    );
    return filtered.length;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Today</Text>
        {checkSchedule(userPlants) ? (
          <Text style={styles.notice}>Your plants need some love! ❤️</Text>
        ) : (
          <Text style={styles.notice}>Your plants are all happy! 😊</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
