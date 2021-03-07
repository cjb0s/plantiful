import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import MyPlants from './screens/MyPlants/MyPlants';
import Home from './screens/Home/Home';
import AddPlant from './screens/AddPlant/AddPlant';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userPlants, setUserPlants] = useState([]);
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
            } else if (route.name === 'My Plants') {
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
            <Home {...navigation} userPlants={userPlants} />
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
          name="My Plants"
          children={(navigation) => (
            <MyPlants
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
