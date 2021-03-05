import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './AddPlant.style';
import PlantForm from '../../components/PlantForm/PlantForm';

export default function Home(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Add plant</Text>
        <PlantForm {...props} />
      </View>
    </SafeAreaView>
  );
}
