import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#295240',
    marginBottom: 20,
    fontFamily: 'Cantarell_700Bold_Italic',
  },
  input: {
    backgroundColor: '#eec1ae',
    color: '#295240',
    fontFamily: 'Cantarell_700Bold',
    borderRadius: 15,
    marginBottom: 30,
    padding: 10,
  },
  input_name: {
    fontSize: 16,
  },
  input_date: {
    marginBottom: 30,
  },
  suggestion: {
    borderBottomWidth: 1,
    borderBottomColor: '#295240',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  suggestion_commonName: {
    paddingLeft: 15,
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#295240',
  },
  suggestion_scientificName: {
    paddingLeft: 15,
    paddingBottom: 15,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#295240',
  },
  suggestion_image: {
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  // dateContainer: {
  //   borderRadius: 100,
  // },
  placeholder_date: {
    color: '#295240',
    fontFamily: 'Cantarell_700Bold',
    fontSize: 16,
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
    paddingHorizontal: 15,
    color: 'red',
    fontSize: 16,
    fontFamily: 'Cantarell_700Bold',
  },
  overlay_done: {
    paddingHorizontal: 15,
    color: '#295240',
    fontSize: 16,
    fontFamily: 'Cantarell_700Bold',
  },
  dateTimePicker: {
    backgroundColor: '#fcd9c8',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
