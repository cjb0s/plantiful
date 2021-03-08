import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 20,
    color: '#295240',
    fontFamily: 'FanwoodText_400Regular',
    marginTop: 30,
  },
  input: {
    fontSize: 20,
    fontFamily: 'FanwoodText_400Regular',
    color: '#295240',
    padding: 10,
    borderBottomColor: '#295240',
    borderBottomWidth: 1,
  },
  input_name: {
    marginTop: 30,
  },
  suggestion: {
    borderBottomWidth: 1,
    borderBottomColor: '#295240',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  suggestion_commonName: {
    fontSize: 20,
    fontFamily: 'FanwoodText_400Regular',
    color: '#295240',
    paddingLeft: 15,
    marginTop: 15,
  },
  suggestion_scientificName: {
    fontSize: 18,
    fontFamily: 'FanwoodText_400Regular',
    color: '#295240',
    paddingLeft: 15,
    paddingBottom: 15,
  },
  suggestion_image: {
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  placeholder_date: {
    fontFamily: 'FanwoodText_400Regular',
    fontSize: 20,
    color: '#295240',
  },
  overlay: {
    width: '100%',
    backgroundColor: '#fcd9c8',
    borderRadius: 15,
  },
  overlay_header: {
    backgroundColor: '#fcd9c8',
    borderColor: '#295240',
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  overlay_cancel: {
    marginLeft: 15,
  },
  overlay_done: {
    marginRight: 15,
  },
  dateTimePicker: {
    backgroundColor: '#fcd9c8',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
