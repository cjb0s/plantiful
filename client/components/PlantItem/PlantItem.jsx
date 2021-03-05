import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from 'moment';
import styles from './PlantItem.style';

export default function PlantItem({ userPlant }) {
  const [remainingDays, setRemainingDays] = useState(
    moment(userPlant.next_water).diff(moment(), 'days') + 1,
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingDays(moment(userPlant.next_water).diff(moment(), 'days') + 1);
    }, 1800000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image
          source={require('../../assets/AloeVera.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.header}>{userPlant.common_name}</Text>
        <AnimatedCircularProgress
          size={90}
          width={4}
          backgroundWidth={10}
          fill={(remainingDays / userPlant.water_days) * 100}
          tintColor="#5da8a0"
          backgroundColor="#3e5586"
          rotation={0}
          lineCap="butt"
          style={styles.progress}
        >
          {(fill) => (
            <View>
              <Text style={[styles.timer, styles.header]}>{remainingDays}</Text>
              <Text>days left</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
}
