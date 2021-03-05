import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import styles from './PlantItem.style';

export default function PlantItem({ userPlant }) {
  const [remainingDays, setRemainingDays] = useState(
    moment(userPlant.next_water).diff(moment(), 'days'),
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingDays(moment(userPlant.next_water).diff(moment(), 'days'));
    }, 1800000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const waterMe = () => {};

  const handlePress = () => {
    if (remainingDays === 1) {
      Alert.alert(
        `This plant still has ${remainingDays} day left... Are you sure?`,
        '🤔',
        [
          {
            text: 'Yes',
            onPress: () => console.log(moment().format('Do MMM YYYY')),
          },
          {
            text: 'No',
          },
        ],
      );
    } else if (remainingDays > 0) {
      Alert.alert(
        `This plant still has ${remainingDays} days left... Are you sure?`,
        '🤔',
        [
          {
            text: 'Yes',
            onPress: () =>
              console.log('date now', moment().format('Do MMM YYYY')),
          },
          {
            text: 'No',
          },
        ],
      );
    } else {
      Alert.alert(`Are you sure?`, '💦🪴', [
        {
          text: 'Yes',
          onPress: () => console.log(moment().format('Do MMM YYYY')),
        },
        {
          text: 'No',
        },
      ]);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image
          source={require('../../assets/AloeVera.jpeg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <MaterialCommunityIcons
            name="watering-can-outline"
            size={24}
            color="white"
          />
          <Text style={styles.buttonText}>Water me!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Text style={styles.header}>{userPlant.common_name}</Text>
        <Text style={styles.subheader}>{userPlant.scientific_name}</Text>
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
