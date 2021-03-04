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
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    height: 200,
  },
  left: {
    width: '40%',
  },
  right: {
    width: '40%',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progress: {
    marginVertical: 10,
  },
  timer: {
    textAlign: 'center',
    fontSize: 18,
  },
});
