import { Alert } from 'react-native';
import { takeLeading } from 'redux-saga/effects';

import ActionTypes from './actions';
import { navigationRef } from '../../helpers';

function* updateProfile(params) {
  Alert.alert('Update profile', 'The profile updated', [{ text: 'Ok', onPress: navigationRef.current?.goBack }], { cancelable: false });
}

function* buyProduct(params) {
  Alert.alert('Shopping', "You're bougth the product");
}

export default function* () {
  yield takeLeading(ActionTypes.UPDATE_PROFILE, updateProfile);
  yield takeLeading(ActionTypes.BUY_PRODUCT, buyProduct);
}
