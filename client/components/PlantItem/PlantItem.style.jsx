import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    backgroundColor: '#295240',
    marginBottom: 50,
    marginHorizontal: 20,
    padding: 13,
    height: 250,
  },
  top: {
    width: '100%',
  },
  middle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 40,
    color: '#fcd9c8',
    fontFamily: 'Akaya-Telivigala',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Cantarell_700Bold_Italic',
    color: '#fcd9c8',
    textAlign: 'center',
  },
  image_container: {},
  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  progress: {
    marginVertical: 10,
  },
  timer_container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timer: {
    textAlign: 'center',
    fontSize: 80,
    fontFamily: 'Akaya-Kanadaka',
    color: '#fcd9c8',
  },
  waterMe: {
    borderRadius: 50,
    borderColor: '#fcd9c8',
    borderWidth: 2,
    padding: 5,
    marginRight: 107,
  },
  delete: {
    justifyContent: 'center',
  },
});
