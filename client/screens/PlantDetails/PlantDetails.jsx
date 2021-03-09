import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Icon from '../../components/Icons/Icons';
import { Feather } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card';
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
                  width={115}
                  color="#fcd9c8"
                />
                <Text style={styles.difficulty_text}>difficulty</Text>
              </View>
              <View style={styles.waterTemp_container}>
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="watering-can-outline"
                    size={25}
                    color="#fcd9c8"
                  />
                </View>
                <Text style={styles.icon_number}>
                  {route.params.userPlant.water_days}
                </Text>
                <View style={[styles.icon, styles.thermometer]}>
                  <Fontisto name="thermometer-alt" size={20} color="#fcd9c8" />
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
                <Feather name="sun" size={20} color="#fcd9c8" />
              </View>
              <Text style={styles.info_text}>
                {route.params.userPlant.light.toLowerCase()}
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <MaterialCommunityIcons
                  name="baby-bottle-outline"
                  size={20}
                  color="#fcd9c8"
                />
              </View>
              <Text style={styles.info_text}>
                {route.params.userPlant.feed.toLowerCase()}
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.icon_small}>
                <MaterialCommunityIcons
                  name="bucket-outline"
                  size={20}
                  color="#fcd9c8"
                />
              </View>
              <Text style={styles.info_text}>
                {route.params.userPlant.repot.toLowerCase()}
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.header_container}>
              <Text style={styles.commonProblems_header}>COMMON PROBLEMS</Text>
            </View>
            <FlatList
              contentContainerStyle={styles.commonProblems}
              data={route.params.userPlant.common_problems}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <FlipCard
                  style={styles.flipCard}
                  friction={6}
                  perspective={1000}
                  flipHorizontal={false}
                  flipVertical={true}
                  flip={false}
                  clickable={true}
                >
                  {/* Face Side */}
                  <View style={styles.face}>
                    <Text style={styles.face_text}>{item.symptom}</Text>
                  </View>
                  {/* Back Side */}
                  <View style={styles.back}>
                    <Text style={styles.back_text}>{item.cause}</Text>
                  </View>
                </FlipCard>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
