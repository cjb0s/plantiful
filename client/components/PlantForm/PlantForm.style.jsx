import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 30,
    zIndex: -1,
  },
  container: {
    marginVertical: 20,
  },
  button: {
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 15,
    paddingBottom: 15,
    fontSize: 20,
  },
  suggestion: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
