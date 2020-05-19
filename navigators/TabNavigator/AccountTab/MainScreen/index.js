import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

// Components
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';

class MainScreen extends React.Component {
  onPressEdit = () => {
    const { navigation } = this.props;

    navigation.navigate('UpdateProfile');
  }

  totalPriceReducer = (total, item) => total + item.price;

  renderItem = (item, index) => {
    return (
      <View key={index} style={styles.item.container}>
        <Text style={styles.field.text}>{item.name}</Text>
        <View style={styles.container} />
        <Text style={styles.field.text}>{`Quantity: ${item.quantity}`}</Text>
      </View>
    );
  }

  render = () => {
    const { user, products } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={[styles.shadow, styles.panel]}>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>{user.fullname}</Text>
          </View>
          <View style={styles.field.container}>
            <Text style={styles.field.text}>{user.gender}</Text>
          </View>
          <View style={[styles.field.container]}>
            <Text style={styles.field.text}>{user.birthday}</Text>
          </View>
          <View style={[styles.field.container]}>
            <Text style={styles.field.text}>{`$${user.cash}`}</Text>
          </View>
        </View>
        <View style={[styles.shadow, styles.panel, { marginTop: 0 }]}>
          <View style={[styles.field.container, { flexDirection: 'row' }]}>
            <Text style={[styles.field.text, { fontWeight: 'bold' }]}>History</Text>
            <View style={styles.container} />
            <Text style={styles.field.text}>{`Total price: ${products.reduce(this.totalPriceReducer, 0)}`}</Text>
          </View>
          {products.length > 0 && products.map(this.renderItem)}
        </View>
        <TouchableRipple style={[styles.shadow, styles.button.touchable]} onPress={this.onPressEdit}>
          <Text style={styles.button.text}>Update profile</Text>
        </TouchableRipple>
      </ScrollView>
    );
  }
}

MainScreen.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  // console.log("mapStateToProps -> state", state.authReducer.orderReducer);
  return ({
    user: state.authReducer.userReducer,
    products: state.authReducer.orderReducer,
  });
};

export default connect(mapStateToProps)(MainScreen);
