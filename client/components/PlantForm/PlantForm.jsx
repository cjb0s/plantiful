import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './PlantForm.style';
import ApiService from '../../services/ApiService';

export default function PlantForm() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    ApiService.getPlants().then((plants) => {
      setPlants(plants);
      setFiltered(plants.slice());
    });
  }, []);

  useEffect(() => {
    if (!query) setFiltered(plants);
    else {
      let search = query.toLowerCase();
      const newFiltered = plants.filter((plant) =>
        plant.common_name.toLowerCase().startsWith(search),
      );
      setFiltered(newFiltered);
    }
  }, [query]);

  const handlePress = (item) => {
    setQuery(item.common_name);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which plant are you looking for?</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Plant name"
        onFocus={() => {
          setIsFocused(true);
        }}
        // onBlur={() => {
        //   setIsFocused(false);
        // }}
      />
      {isFocused && (
        <FlatList
          data={filtered.sort((a, b) => {
            if (a.common_name > b.common_name) return 1;
            else if (a.common_name < b.common_name) return -1;
            return 0;
          })}
          keyExtractor={(item) => item._id}
          extraData={query}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.flatList}>{item.common_name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
