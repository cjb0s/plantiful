import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#3333',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timer: {
    textAlign: 'center',
    fontSize: 18,
  },
  progress: {
    marginVertical: 10,
  },
});

export default function PlantItem({ plant }) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>{plant.common_name}</Text>
      <AnimatedCircularProgress
        size={100}
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
  );
}
