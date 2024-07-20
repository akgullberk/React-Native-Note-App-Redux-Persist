import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.03,
  },
  input: {
    flex: 1,
    borderColor: '#A18594',
    borderWidth: windowHeight * 0.002,
    padding: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
});
