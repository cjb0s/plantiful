import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import ApiService from '../../services/ApiService';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants() {
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
