import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    backgroundColor: '#295240',
    marginBottom: 50,
    marginHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    height: 260,
  },
  top: {
    width: '100%',
    marginBottom: 5,
  },
  middle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 35,
    fontFamily: 'FanwoodText_400Regular',
    color: '#fcd9c8',
    textAlign: 'center',
  },
  header_container: {
    borderBottomColor: '#fcd9c8',
    borderBottomWidth: 1,
  },
  subheader: {
    fontSize: 20,
    fontFamily: 'FanwoodText_400Regular',
    color: '#fcd9c8',
    textAlign: 'center',
  },
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
    justifyContent: 'center',
  },
  timer: {
    fontSize: 60,
    fontFamily: 'FanwoodText_400Regular',
    color: '#fcd9c8',
    textAlign: 'center',
    marginBottom: 10,
  },
  waterMe: {
    borderRadius: 40,
    borderColor: '#fcd9c8',
    borderWidth: 2,
    padding: 5,
    marginRight: 103,
  },
  delete: {
    justifyContent: 'center',
  },
});
