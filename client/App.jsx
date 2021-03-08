import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import {
  Cantarell_700Bold,
  Cantarell_700Bold_Italic,
} from '@expo-google-fonts/cantarell';
import ApiService from './services/ApiService';
import Home from './screens/Home/Home';
import AddPlant from './screens/AddPlant/AddPlant';
import GreenhouseStackNavigation from './screens/GreenhouseStackNavigation/GreenhouseStackNavigation';

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
    // console.log(token);
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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();

export default function App() {
  const [userPlants, setUserPlants] = useState([]);
  const [needsWatering, setNeedsWatering] = useState(0);
  const [notify, setNotify] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    ApiService.getUserPlants().then((userPlants) => setUserPlants(userPlants));
  }, []);

  let [fontsLoaded] = useFonts({
    BerkshireSwash_400Regular,
    'Akaya-Telivigala': require('./assets/fonts/Akaya_Telivigala/AkayaTelivigala-Regular.ttf'),
    'Akaya-Kanadaka': require('./assets/fonts/Akaya_Kanadaka/AkayaKanadaka-Regular.ttf'),
    Cantarell_700Bold,
    Cantarell_700Bold_Italic,
  });

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
    const newNeedsWatering = checkSchedule(userPlants);
    if (newNeedsWatering > needsWatering) {
      setNeedsWatering(newNeedsWatering);
      setNotify(true);
    } else {
      setNeedsWatering(newNeedsWatering);
      setNotify(false);
    }
  }, [userPlants]);

  useEffect(() => {
    if (notify) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Time to water your plants',
          body: 'Plants need love too',
        },
        trigger: null,
      });
      setNotify(false);
    }
  }, [notify]);

  const checkSchedule = (plants) => {
    const filtered = plants.filter((plant) => {
      const nextWater = moment(plant.next_water).add(1, 'days').toISOString();
      const today = moment().toISOString();
      return moment(nextWater).isSameOrBefore(today);
    });
    return filtered.length;
  };

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Add Plant') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'GreenhouseStackNavigation') {
              iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#295240',
          inactiveTintColor: '#295240',
          showLabel: false,
          style: {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          children={(navigation) => (
            <Home
              {...navigation}
              userPlants={userPlants}
              checkSchedule={checkSchedule}
            />
          )}
        />
        <Tab.Screen
          name="Add Plant"
          children={(navigation) => (
            <AddPlant
              {...navigation}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          )}
        />
        <Tab.Screen
          name="GreenhouseStackNavigation"
          children={(navigation) => (
            <GreenhouseStackNavigation
              {...navigation}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          )}
        />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
