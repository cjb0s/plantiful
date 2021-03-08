import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants({ userPlants, setUserPlants, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>my plants</Text>
        </View>
        {userPlants.length ? (
          <FlatList
            style={styles.list}
            data={userPlants}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlantDetails', {
                    userPlant: item,
                  });
                }}
              >
                <PlantItem userPlant={item} setUserPlants={setUserPlants} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={styles.notice}>add a plant to get started</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
