import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ApiService from '../../services/ApiService';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants({ userPlants }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={userPlants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <PlantItem plant={item} />}
      />
    </View>
  );
}
