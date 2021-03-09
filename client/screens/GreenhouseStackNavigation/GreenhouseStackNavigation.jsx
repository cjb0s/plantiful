import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlantDetails from '../PlantDetails/PlantDetails';
import MyPlants from '../MyPlants/MyPlants';

const Stack = createStackNavigator();

export default function GreenhouseStackNavigation({
  userPlants,
  setUserPlants,
}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPlants"
        children={(navigation) => {
          return (
            <MyPlants
              {...navigation}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          );
        }}
        options={{ headerShown: false, title: 'My Plants' }}
      />
      <Stack.Screen
        name="PlantDetails"
        component={PlantDetails}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#295240',
        }}
      />
    </Stack.Navigator>
  );
}
