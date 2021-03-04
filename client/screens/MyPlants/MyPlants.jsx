import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants({ myPlants }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <PlantItem plant={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
