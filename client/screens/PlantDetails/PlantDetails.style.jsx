import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 70,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#fcd9c8',
  },
  card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#295240',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  top: {
    width: '100%',
    marginBottom: 5,
  },
  middle_top: {
    width: '100%',
    marginBottom: 5,
  },
  middle_bottom: {},
  bottom: {},
  header_container: {
    borderBottomColor: '#fcd9c8',
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 35,
    fontFamily: 'FanwoodText_400Regular',
    color: '#fcd9c8',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontFamily: 'FanwoodText_400Regular',
    color: '#fcd9c8',
    textAlign: 'center',
  },
  image_container: { flex: 1 },
  imageText_container: { flex: 3 },
  image: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
});
