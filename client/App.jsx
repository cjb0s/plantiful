import React, { useState, useEffect } from 'react';
import ApiService from './services/ApiService';
import { createStackNavigator } from '@react-navigation/stack';
import MyPlants from './screens/MyPlants/MyPlants';

const Stack = createStackNavigator();

export default function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    ApiService.getPlants().then((plants) => setPlants(plants));
  }, []);

  return <MyPlants myPlants={plants} />;
}
