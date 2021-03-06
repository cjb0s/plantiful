import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
  notice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  image_container: {
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 335,
    width: 335,
    alignItems: 'center',
    borderRadius: 5,
  },
  topTip: {
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 13,
    width: '100%',
  },
  topTip_header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topTip_text: {
    fontSize: 16,
  },
});
