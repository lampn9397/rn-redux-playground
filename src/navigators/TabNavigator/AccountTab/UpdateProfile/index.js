import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Keyboard } from 'react-native';

// Components
import TouchableRipple from '../../../../components/TouchableRipple';

// Variables
import styles from './styles';
import ActionTypes from '../../../../redux/authModule/actions';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(JSON.stringify(props.user));

    this.state = {
      user: {
        fullname: user.fullname,
        gender: user.gender,
        birthday: user.birthday,
      },
    };
  }

  onSubmit = () => {
    const { user } = this.state;

    Keyboard.dismiss();

    this.props.updateProfile(user);
  }

  onChangeText = (fieldName) => (value) => {
    const { user } = this.state;

    user[fieldName] = value;

    this.setState({ user });
  }

  render = () => {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <View style={[styles.shadow, styles.panel]}>
          <View style={styles.field.container}>
            <TextInput value={user.fullname} style={styles.field.text} onChangeText={this.onChangeText('fullname')} />
          </View>
          <View style={styles.field.container}>
            <TextInput value={user.gender} style={styles.field.text} onChangeText={this.onChangeText('gender')} />
          </View>
          <View style={[styles.field.container, { marginBottom: 0 }]}>
            <TextInput value={user.birthday} style={styles.field.text} onChangeText={this.onChangeText('birthday')} />
          </View>
        </View>
        <TouchableRipple style={[styles.shadow, styles.button.touchable]} onPress={this.onSubmit}>
          <Text style={styles.button.text}>Save</Text>
        </TouchableRipple>
      </View>
    );
  }
}

MainScreen.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps -> state", state);
  return ({
    user: state.authReducer.userReducer,
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch({ type: ActionTypes.UPDATE_PROFILE, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
