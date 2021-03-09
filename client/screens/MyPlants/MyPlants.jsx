import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants({ userPlants, setUserPlants, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>MY PLANTS</Text>
          {!userPlants.length && (
            <Text style={styles.notice}>add a plant to get started</Text>
          )}
        </View>
        {userPlants.length ? (
          <FlatList
            style={styles.list}
            data={userPlants}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
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
          <View style={styles.image_container}>
            <Image
              source={require('../../assets/images/MyPlants.jpeg')}
              style={styles.image}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
