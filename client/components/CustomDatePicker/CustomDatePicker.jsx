import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import styles from './CustomDatePicker.style';

export default function CustomDatePicker() {
  const [dateString, setDateString] = useState(
    moment(new Date()).format('Do MMM YYYY'),
  );
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    console.log(selectedDate);
    setDateString(moment(selectedDate).format('Do MMM YYYY'));
    setDate(selectedDate);
  };

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
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
  );
}
