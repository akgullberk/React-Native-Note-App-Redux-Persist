import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  noteItem: {
    padding: windowHeight * 0.01,
    borderBottomWidth: windowHeight * 0.001,
    borderBottomColor: '#ccc',
  },
  noteTextContainer: {
    borderWidth: windowHeight * 0.001,
    borderColor: '#000',
    padding: windowHeight * 0.01,
    marginBottom: windowHeight * 0.03,
  },
  noteText: {
    fontSize: windowHeight * 0.025,
  },
});
