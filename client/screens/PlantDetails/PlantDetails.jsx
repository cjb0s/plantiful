import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Icon from '../../components/Icons/Icons';
import styles from './PlantDetails.style';

export default function NestedScreen({ route }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.top}>
            <View style={styles.header_container}>
              <Text style={styles.header}>
                {route.params.userPlant.name.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.subheader}>
              {route.params.userPlant.scientific_name.toLowerCase()}
            </Text>
          </View>
          <View style={styles.middle_top}>
            <View style={styles.image_container}>
              <Icon
                plantName={route.params.userPlant.common_name}
                plantStyle={styles.image}
              />
            </View>
            <View style={styles.imageText_container}></View>
          </View>
          <View style={styles.middle_bottom}></View>
          <View style={styles.bottom}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
