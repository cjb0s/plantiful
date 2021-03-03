import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>I'm a plant!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
