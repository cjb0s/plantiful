import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
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
    </NavigationContainer>
  );
}
