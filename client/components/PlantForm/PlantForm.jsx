import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Overlay } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import Icon from '../Icons/Icons';
import styles from './PlantForm.style';
import ApiService from '../../services/ApiService';

export default function PlantForm({ setUserPlants }) {
  const [plants, setPlants] = useState([]);
  const [typeQuery, setTypeQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');
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
    if (!typeQuery) setFiltered(plants);
    else {
      let search = typeQuery.toLowerCase();
      const newFiltered = plants.filter(
        (plant) =>
          plant.common_name.toLowerCase().startsWith(search) ||
          plant.scientific_name.toLowerCase().startsWith(search),
      );
      setFiltered(newFiltered);
    }
  }, [typeQuery]);

  const validateInput = (typeQuery, plants) => {
    const filtered = plants.filter((plant) => plant.common_name === typeQuery);
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
    setTypeQuery(item.common_name);
    setIsFocused(false);
  };

  const handleDateChange = (event, selectedDate) => {
    setDateString(moment(selectedDate).format('Do MMM YYYY'));
    setDate(selectedDate);
  };

  const handleSubmit = () => {
    const chosenDate = moment(dateString, 'Do MMM YYYY').format();
    const today = moment();
    if (!typeQuery) Alert.alert('Please enter a plant name');
    else if (!validateInput(typeQuery, plants))
      Alert.alert('Please enter a valid plant name');
    else if (!nameQuery)
      Alert.alert('Give your plant a name. Plants are people too.');
    else if (moment(chosenDate).isAfter(today))
      Alert.alert('Please enter a present or past date');
    else {
      ApiService.findPlant(typeQuery).then((plant) => {
        delete plant['__v'];
        delete plant['_id'];
        plant.name = nameQuery;
        plant.next_water = moment(dateString, 'Do MMM YYYY').add(
          plant.water_days,
          'd',
        );
        ApiService.postPlant(plant).then((res) =>
          setUserPlants((prevPlants) => [...prevPlants, res]),
        );
        Alert.alert('Your new plant has been added');
      });
      setTypeQuery('');
      setNameQuery('');
      setDateString(moment(new Date()).format('Do MMM YYYY'));
      setDate(new Date());
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={typeQuery}
        onChangeText={setTypeQuery}
        placeholder="plant type"
        placeholderTextColor="#295240"
        onFocus={() => {
          setIsFocused(true);
        }}
        clearButtonMode="always"
      />
      {typeQuery.length && isFocused ? (
        <FlatList
          style={styles.list}
          data={sortList(filtered, 'common_name')}
          keyExtractor={(item) => item._id}
          extraData={typeQuery}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => handleSuggestionPress(item)}
            >
              <View>
                <Text style={styles.suggestion_commonName}>
                  {item.common_name.toUpperCase()}
                </Text>
                <Text style={styles.suggestion_scientificName}>
                  {item.scientific_name}
                </Text>
              </View>
              <Icon
                plantName={item.common_name}
                plantStyle={styles.suggestion_image}
              />
            </TouchableOpacity>
          )}
        />
      ) : null}
      <TextInput
        style={[styles.input, styles.input_name]}
        value={nameQuery}
        onChangeText={setNameQuery}
        placeholder="nickname"
        placeholderTextColor="#295240"
        clearButtonMode="always"
      />
      <Text style={styles.label}>WHEN WAS I LAST WATERED?</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={showOverlay} style={styles.input}>
          <Text style={styles.placeholder_date}>{dateString}</Text>
        </TouchableOpacity>
        <Overlay
          isVisible={show}
          onBackdropPress={hideOverlay}
          overlayStyle={styles.overlay}
        >
          <View>
            <View style={styles.overlay_header}>
              <TouchableOpacity onPress={hideOverlay}>
                <AntDesign
                  style={styles.overlay_cancel}
                  name="closecircleo"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={hideOverlay}>
                <AntDesign
                  style={styles.overlay_done}
                  name="checkcircleo"
                  size={24}
                  color="#295240"
                />
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
        <Ionicons name="ios-add-circle" size={55} color="#295240" />
      </TouchableOpacity>
    </View>
  );
}
