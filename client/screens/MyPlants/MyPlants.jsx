// import React, { useState, useEffect } from 'react';
// import { View, FlatList } from 'react-native';
// import ApiService from '../../services/ApiService';
// import PlantItem from '../../components/PlantItem/PlantItem';
// import styles from './MyPlants.style';

// export default function MyPlants() {
//   // const [plants, setPlants] = useState([]);

//   // useEffect(() => {
//   //   ApiService.getPlants().then((plants) => setPlants(plants));
//   // }, []);

//   const [userPlants, setUserPlants] = useState([]);

//   useEffect(() => {
//     ApiService.getUserPlants().then((userPlants) => setUserPlants(userPlants));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={userPlants}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => <PlantItem plant={item} />}
//       />
//     </View>
//   );
// }

import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ApiService from '../../services/ApiService';
import PlantItem from '../../components/PlantItem/PlantItem';
import styles from './MyPlants.style';

export default function MyPlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    ApiService.getPlants().then((plants) => setPlants(plants));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <PlantItem plant={item} />}
      />
    </View>
  );
}
