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

  const onChange = (event, selectedDate) => {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={showOverlay} style={styles.input}>
        <Text style={styles.placeholder}>📅 {dateString}</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={show}
        onBackdropPress={hideOverlay}
        overlayStyle={styles.overlay}
      >
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hideOverlay}>
              <Text style={styles.done}>Done</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            style={styles.dateTimePicker}
            value={date}
            mode={'date'}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        </View>
      </Overlay>
    </View>
  );
}
