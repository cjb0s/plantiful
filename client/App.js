import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import ApiService from './services/ApiService';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#3333',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
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
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.header}>{item.common_name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
