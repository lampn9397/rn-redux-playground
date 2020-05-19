import React from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, Image } from 'react-native';

// Components
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';
import ActionTypes from '../../../../redux/authModule/actions';

const products = [
  { id: 1, name: 'Product A', price: 10, image: 'https://vcdn-sohoa.vnecdn.net/2020/05/02/Apple-7276-1588402261.jpg' },
  { id: 2, name: 'Product B', price: 10, image: 'https://vcdn-sohoa.vnecdn.net/2020/05/02/Apple-7276-1588402261.jpg' },
  { id: 3, name: 'Product C', price: 10, image: 'https://vcdn-sohoa.vnecdn.net/2020/05/02/Apple-7276-1588402261.jpg' },
  { id: 4, name: 'Product D', price: 10, image: 'https://vcdn-sohoa.vnecdn.net/2020/05/02/Apple-7276-1588402261.jpg' },
  { id: 5, name: 'Product E', price: 10, image: 'https://vcdn-sohoa.vnecdn.net/2020/05/02/Apple-7276-1588402261.jpg' },
];

class MainScreen extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View style={[styles.shadow, styles.item.touchable]}>
        <View style={styles.item.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.item.image} />
        </View>
        <View style={styles.item.contentContainer}>
          <Text style={styles.item.text}>{item.name}</Text>
          <View style={styles.container} />
          <Text style={styles.item.text}>{`$${item.price}`}</Text>
        </View>
        <TouchableRipple
          rippleColor="white"
          style={styles.item.submitTouchable}
          onPress={this.onPressItem(item)}
        >
          <Text style={styles.item.submitText}>Add to cart</Text>
        </TouchableRipple>
      </View>
    );
  }

  keyExtractor = (item, index) => index.toString();

  onPressItem = (item) => () => {
    // console.log('onPressItem -> item', item);
    this.props.buyProduct(item);
  }

  render = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  buyProduct: (product) => dispatch({ type: ActionTypes.BUY_PRODUCT, product }),
});

export default connect(null, mapDispatchToProps)(MainScreen);
