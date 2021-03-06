import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants({ userPlants, setUserPlants }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>My plants</Text>
        <FlatList
          style={styles.list}
          data={userPlants}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <PlantItem
              userPlant={item}
              userPlants={userPlants}
              setUserPlants={setUserPlants}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
