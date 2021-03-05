import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#3333',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 25,
    padding: 10,
    height: 240,
  },
  left: {
    width: '40%',
  },
  right: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  progress: {
    marginVertical: 10,
  },
  timer: {
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#1ca3ec',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
});
