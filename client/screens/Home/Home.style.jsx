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
    fontWeight: 'bold',
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#295240',
    marginTop: 5,
    marginBottom: 25,
  },
  notice: {
    fontSize: 30,
    fontFamily: 'Akaya-Telivigala',
    color: '#295240',
  },
  image_container: {
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 320,
    width: 320,
    alignItems: 'center',
  },
  topTip: {
    borderRadius: 15,
    backgroundColor: '#eec1ae',
    padding: 13,
    marginBottom: 40,
    width: '100%',
  },
  topTip_header: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Cantarell_700Bold_Italic',
    color: '#295240',
    marginBottom: 10,
  },
  topTip_text: {
    fontSize: 16,
    fontFamily: 'Cantarell_700Bold',
    color: '#295240',
  },
});
