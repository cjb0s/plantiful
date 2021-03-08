import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './AddPlant.style';
import PlantForm from '../../components/PlantForm/PlantForm';

export default function Home(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>ADD PLANT</Text>
        <PlantForm {...props} />
        <View style={styles.image_container}>
          <Image
            source={require('../../assets/images/AddPlant.jpeg')}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
