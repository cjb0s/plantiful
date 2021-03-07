import moment from 'moment';
import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './Home.style';

export default function Home({ userPlants }) {
  const checkSchedule = (plants) => {
    const filtered = plants.filter(
      (plant) =>
        moment(plant.next_water).add(1, 'days').format('Do MMM YYYY') ===
        moment().format('Do MMM YYYY'),
    );
    return filtered.length;
  };

  const renderNotice = () => {
    if (!userPlants.length) {
      return <Text style={styles.notice}>you don't have any plants</Text>;
    } else if (checkSchedule(userPlants)) {
      return <Text style={styles.notice}>your plants need some love</Text>;
    } else {
      return <Text style={styles.notice}>all your plants are happy</Text>;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>today</Text>
          {renderNotice()}
        </View>
        <View style={styles.image_container}>
          <Image
            source={require('../../assets/images/Home.jpeg')}
            style={styles.image}
          />
        </View>
        <View style={styles.topTip}>
          <Text style={styles.topTip_header}>plantifact</Text>
          <Text style={styles.topTip_text}>
            most plants prefer for their soil to dry out before rewatering
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
