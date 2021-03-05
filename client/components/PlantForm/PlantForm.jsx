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
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

export default function PlantForm({ setUserPlants }) {
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

  const handleSuggestionPress = (item) => {
    setQuery(item.common_name);
    setIsFocused(false);
  };

  const handleSubmit = () => {
    ApiService.findPlant(query).then((plant) => {
      delete plant['__v'];
      delete plant['_id'];
      ApiService.postPlant(plant).then((res) =>
        setUserPlants((prevPlants) => [...prevPlants, res]),
      );
    });
    setQuery('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which plant are you looking for?</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="🔎 Plant name"
        placeholderTextColor="green"
        onFocus={() => {
          setIsFocused(true);
        }}
        clearButtonMode="always"
      />
      {query.length && isFocused ? (
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
              onPress={() => handleSuggestionPress(item)}
            >
              <Text style={styles.flatList}>{item.common_name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
      <Text style={[styles.title, styles.waterMe]}>
        When did you last water me?
      </Text>
      <CustomDatePicker />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
