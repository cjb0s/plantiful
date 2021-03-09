import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fcd9c8',
  },
  header: {
    fontSize: 55,
    fontFamily: 'Quattrocento_700Bold',
    color: '#295240',
    marginTop: 5,
    marginBottom: 25,
  },
  notice: {
    fontSize: 25,
    fontFamily: 'Quattrocento_700Bold',
    color: '#295240',
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 330,
  },
  image: {
    height: '80%',
    width: '110%',
    alignItems: 'center',
  },
  topTip: {
    borderRadius: 15,
    padding: 13,
    marginBottom: 40,
    width: '100%',
  },
  topTip_container: {
    borderBottomColor: '#295240',
    borderBottomWidth: 1,
  },
  topTip_header: {
    fontSize: 23,
    fontFamily: 'FanwoodText_400Regular',
    color: '#295240',
    width: '100%',
    marginBottom: 5,
  },
  topTip_text: {
    fontSize: 16,
    fontFamily: 'FanwoodText_400Regular',
    color: '#295240',
    marginTop: 5,
  },
});
