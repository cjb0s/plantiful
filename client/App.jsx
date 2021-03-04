import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import styles from './App.style';
import ApiService from './services/ApiService';
import PlantItem from './components/PlantItem/PlantItem';

export default function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    ApiService.getPlants().then((plants) => setPlants(plants));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={plants}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <PlantItem plant={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
