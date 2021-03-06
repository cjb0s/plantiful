import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 25,
    marginHorizontal: 20,
    padding: 13,
    height: 240,
  },
  left: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
  },
  right: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image_container: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  delete: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
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
  waterMe: {
    width: 150,
    height: 40,
    backgroundColor: '#1ca3ec',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  waterMe_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
});
