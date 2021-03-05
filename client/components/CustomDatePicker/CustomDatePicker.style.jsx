import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dateContainer: {
    borderRadius: 100,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input_date: {
    marginBottom: 30,
  },
  placeholder_date: {
    color: 'green',
    fontSize: 16,
  },
  overlay: {
    width: '100%',
  },
  overlay_header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlay_cancel: {
    paddingHorizontal: 15,
    color: 'red',
  },
  overlay_done: {
    paddingHorizontal: 15,
    color: 'green',
  },
  dateTimePicker: {
    backgroundColor: 'white',
  },
});
