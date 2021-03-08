import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import Icon from '../Icons/Icons';
import styles from './PlantItem.style';
import ApiService from '../../services/ApiService';

export default function PlantItem({ userPlant, setUserPlants }) {
  const [remainingDays, setRemainingDays] = useState(
    moment(userPlant.next_water).diff(moment(), 'days') + 1,
  );

  const waterMe = () => {
    const update = {
      next_water: moment().add(userPlant.water_days, 'd'),
    };
    ApiService.updateNextWater(userPlant._id, update).then((updatedPlant) => {
      setRemainingDays(
        moment(updatedPlant.next_water).diff(moment(), 'days') + 1,
      );
      setUserPlants((plants) => {
        const index = plants.findIndex(
          (plant) => plant._id === updatedPlant._id,
        );
        const plantsCopy = [...plants];
        plantsCopy.splice(index, 1, updatedPlant);
        return plantsCopy;
      });
    });
  };

  const deleteMe = () => {
    ApiService.deleteUserPlant(userPlant._id).then(() => {
      setUserPlants((userPlants) =>
        userPlants.filter((plant) => plant._id !== userPlant._id),
      );
      Alert.alert(`${userPlant.name} has been removed`);
    });
  };

  const handleWaterMe = () => {
    if (remainingDays > 0) {
      const unit = remainingDays === 1 ? 'day' : 'days';
      const verb = remainingDays === 1 ? 'is' : 'are';
      Alert.alert(
        `Careful not to overwater ${userPlant.name}. There ${verb} still ${remainingDays} ${unit} left.`,
        '',
        [
          {
            text: 'Continue',
            onPress: () => waterMe(),
          },
          {
            text: 'Cancel',
          },
        ],
      );
    } else {
      Alert.alert(`Are you sure?`, '', [
        {
          text: 'Continue',
          onPress: () => waterMe(),
        },
        {
          text: 'Cancel',
        },
      ]);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${userPlant.name} the ${userPlant.common_name}?`,
      '',
      [
        {
          text: 'Continue',
          onPress: () => deleteMe(),
        },
        {
          text: 'Cancel',
        },
      ],
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.header_container}>
          <Text style={styles.header}>{userPlant.name.toUpperCase()}</Text>
        </View>
        <Text style={styles.subheader}>
          {userPlant.scientific_name.toLowerCase()}
        </Text>
      </View>
      <View style={styles.middle}>
        <Icon plantName={userPlant.common_name} plantStyle={styles.image} />
        <AnimatedCircularProgress
          size={120}
          width={3}
          backgroundWidth={0}
          fill={(remainingDays / userPlant.water_days) * 100}
          tintColor="#fcd9c8"
          rotation={330}
          lineCap="round"
          style={styles.progress}
        >
          {(fill) => (
            <View style={styles.timer_container}>
              {remainingDays <= 0 ? (
                <Entypo name="water" size={60} color="#fcd9c8" />
              ) : (
                <Text style={styles.timer}>{remainingDays}</Text>
              )}
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.waterMe} onPress={handleWaterMe}>
          <MaterialCommunityIcons
            name="watering-can-outline"
            size={30}
            color="#fcd9c8"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete} onPress={handleDelete}>
          <MaterialIcons name="highlight-remove" size={24} color="#fcd9c8" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
