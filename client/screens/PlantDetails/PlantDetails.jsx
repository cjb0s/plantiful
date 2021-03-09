import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Icon from '../../components/Icons/Icons';
import styles from './PlantDetails.style';

export default function NestedScreen({ route }) {
  const difficulty = (10 - route.params.userPlant.difficulty) / 10;

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
            <View style={styles.imageText_container}>
              <View style={styles.difficulty_container}>
                <Progress.Bar
                  progress={difficulty}
                  width={100}
                  color="#fcd9c8"
                />
                <Text style={styles.difficulty_text}>difficulty</Text>
              </View>
              <View style={styles.waterTemp_container}>
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="watering-can-outline"
                    size={30}
                    color="#fcd9c8"
                  />
                  <Text style={styles.icon_number}>
                    {route.params.userPlant.water_days}
                  </Text>
                </View>
                <View style={styles.icon}>
                  <FontAwesome
                    name="thermometer-half"
                    size={30}
                    color="#fcd9c8"
                  />
                  <View style={styles.temperature_text}>
                    <Text style={styles.icon_number}>
                      {route.params.userPlant.temperature.max}c
                    </Text>
                    <Text style={styles.icon_number}>
                      {route.params.userPlant.temperature.min}c
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middle_bottom}></View>
          <View style={styles.bottom}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
