import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PlantItem.style';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function PlantItem({ plant }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image
          source={require('../../assets/AloeVera.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.header}>{plant.common_name}</Text>
        <AnimatedCircularProgress
          size={90}
          width={4}
          backgroundWidth={10}
          fill={((Math.random() * 10) / plant.water_days) * 100}
          tintColor="#5da8a0"
          backgroundColor="#3e5586"
          rotation={0}
          lineCap="butt"
          style={styles.progress}
        >
          {(fill) => (
            <View>
              <Text style={[styles.timer, styles.header]}>
                {plant.water_days}
              </Text>
              <Text>days left</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
}
