import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import styles from './PlantForm.style';
import ApiService from '../../services/ApiService';

export default function PlantForm({ setUserPlants }) {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [dateString, setDateString] = useState(
    moment(new Date()).format('Do MMM YYYY'),
  );
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

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
      const newFiltered = plants.filter(
        (plant) =>
          plant.common_name.toLowerCase().startsWith(search) ||
          plant.scientific_name.toLowerCase().startsWith(search),
      );
      setFiltered(newFiltered);
    }
  }, [query]);

  const validateInput = (query, plants) => {
    const filtered = plants.filter((plant) => plant.common_name === query);
    return filtered.length;
  };

  const sortList = (data, key) => {
    return data.sort((a, b) => {
      if (a[key] > b[key]) return 1;
      else if (a[key] < b[key]) return -1;
      return 0;
    });
  };

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  const handleSuggestionPress = (item) => {
    setQuery(item.common_name);
    setIsFocused(false);
  };

  const handleDateChange = (event, selectedDate) => {
    setDateString(moment(selectedDate).format('Do MMM YYYY'));
    setDate(selectedDate);
  };

  const handleSubmit = () => {
    if (!query) Alert.alert('Please enter a plant name 🪴');
    else if (!validateInput(query, plants))
      Alert.alert('Please enter a valid plant name 🤔');
    else {
      ApiService.findPlant(query).then((plant) => {
        delete plant['__v'];
        delete plant['_id'];
        plant.next_water = moment(dateString, 'Do MMM YYYY').add(
          plant.water_days,
          'd',
        );
        ApiService.postPlant(plant).then((res) =>
          setUserPlants((prevPlants) => [...prevPlants, res]),
        );
        Alert.alert('Your new plant has been added 🎉');
      });
      setQuery('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Which plant are you looking for?</Text>
      <TextInput
        style={[styles.input, styles.input_name]}
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
          data={sortList(filtered, 'common_name')}
          keyExtractor={(item) => item._id}
          extraData={query}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => handleSuggestionPress(item)}
            >
              <View>
                <Text style={styles.suggestion_commonName}>
                  {item.common_name}
                </Text>
                <Text style={styles.suggestion_scientificName}>
                  {item.scientific_name}
                </Text>
              </View>
              <Image
                source={require('../../assets/AloeVera.jpeg')}
                style={styles.suggestion_image}
              />
            </TouchableOpacity>
          )}
        />
      ) : null}
      <Text style={[styles.label, styles.label_date]}>
        When did you last water me?
      </Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={showOverlay}
          style={[styles.input, styles.input_date]}
        >
          <Text style={styles.placeholder_date}>📅 {dateString}</Text>
        </TouchableOpacity>
        <Overlay
          isVisible={show}
          onBackdropPress={hideOverlay}
          overlayStyle={styles.overlay}
        >
          <View>
            <View style={styles.overlay_header}>
              <TouchableOpacity onPress={hideOverlay}>
                <Text style={styles.overlay_cancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideOverlay}>
                <Text style={styles.overlay_done}>Done</Text>
              </TouchableOpacity>
            </View>
            <DateTimePicker
              style={styles.dateTimePicker}
              value={date}
              mode={'date'}
              is24Hour={true}
              display="spinner"
              onChange={handleDateChange}
            />
          </View>
        </Overlay>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
