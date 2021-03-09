import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Icon from '../../components/Icons/Icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
                  width={120}
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
                </View>
                <Text style={styles.icon_number}>
                  {route.params.userPlant.water_days}
                </Text>
                <View style={[styles.icon, styles.thermometer]}>
                  <Fontisto name="thermometer-alt" size={25} color="#fcd9c8" />
                </View>
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
          <View style={styles.middle_bottom}>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <Feather name="sun" size={25} color="#fcd9c8" />
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <MaterialCommunityIcons
                  name="baby-bottle-outline"
                  size={25}
                  color="#fcd9c8"
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <MaterialCommunityIcons
                  name="pot-outline"
                  size={25}
                  color="#fcd9c8"
                />
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <Ionicons name="earth" size={25} color="#fcd9c8" />
              </View>
            </View>
          </View>
          <View style={styles.bottom}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
