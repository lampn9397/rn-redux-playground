import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: { flex: 1 },
  panel: {
    margin: 12,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  shadow: {
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
  },
});

const field = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    // borderRadius: 5,
    // marginBottom: 12,
    borderColor: '#dfe6e9',
  },
  text: {
    fontSize: 17,
  },
});

const button = StyleSheet.create({
  touchable: {
    margin: 12,
    padding: 12,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const item = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dfe6e9',
  },
});

export default {
  ...common,
  field,
  button,
  item,
};
