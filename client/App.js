import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import PlantItem from './components/PlantItem';
import ApiService from './services/ApiService';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

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
