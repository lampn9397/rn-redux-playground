import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
  },
});

const item = StyleSheet.create({
  touchable: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  imageContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
  },
  submitTouchable: {
    padding: 12,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#d63031',
  },
  submitText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});

export default {
  ...common,
  item,
};
