import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import styles from './PlantItem.style';
import ApiService from '../../services/ApiService';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Time to check on your plants',
    body: 'Plants need love too!',
  },
  trigger: {
    hour: 9,
    minute: 0,
    repeats: true,
  },
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function PlantItem({ userPlant, setUserPlants }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [remainingDays, setRemainingDays] = useState(
    moment(userPlant.next_water).diff(moment(), 'days') + 1,
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token),
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      },
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      },
    );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingDays(moment(userPlant.next_water).diff(moment(), 'days') + 1);
    }, 1800000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const waterMe = () => {
    const update = {
      next_water: moment().add(userPlant.water_days, 'd'),
    };
    ApiService.updateNextWater(userPlant._id, update).then((updatedPlant) => {
      setRemainingDays(
        moment(updatedPlant.next_water).diff(moment(), 'days') + 1,
      );
      Alert.alert(`Your ${userPlant.common_name} has been watered 🎉`);
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
      Alert.alert(`Your ${userPlant.common_name} has been removed... 🪦`);
    });
  };

  const handleWaterMe = () => {
    if (remainingDays > 0) {
      const unit = remainingDays === 1 ? 'day' : 'days';
      Alert.alert(
        `Careful not to overwater your ${userPlant.common_name}! It still has ${remainingDays} ${unit} left...`,
        '😓',
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
      Alert.alert(`Are you sure?`, '💦🪴', [
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
      `Are you sure you want to delete your ${userPlant.common_name}?`,
      '😱',
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
        <Text style={styles.header}>{userPlant.common_name.toLowerCase()}</Text>
        <Text style={styles.subheader}>
          {userPlant.scientific_name.toLowerCase()}
        </Text>
      </View>
      <View style={styles.middle}>
        <Image
          source={require('../../assets/images/AloeVera.jpeg')}
          style={styles.image}
        />
        <AnimatedCircularProgress
          size={120}
          width={4}
          backgroundWidth={0}
          fill={(remainingDays / userPlant.water_days) * 100}
          tintColor="#fcd9c8"
          rotation={330}
          lineCap="round"
          style={styles.progress}
        >
          {(fill) => (
            <View style={styles.timer_container}>
              <Text style={styles.timer}>{remainingDays}</Text>
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

// async function schedulePushNotification() {
//   const notification = remainingDays
//     ? {
//         title: 'Plants needing love',
//         body: 'I am working!',
//       }
//     : {
//         title: 'All good',
//         body: 'I am working!',
//       };

//   await Notifications.scheduleNotificationAsync({
//     content: notification,
//     trigger: {
//       hour: 10,
//       minute: 00,
//       repeats: true,
//     },
//   });
// }
