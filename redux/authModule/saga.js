import { takeLeading } from 'redux-saga/effects';

import ActionTypes from './actions';

function* updateProfile(params) {
  
}

export default function* () {
  yield takeLeading(ActionTypes.UPDATE_PROFILE, updateProfile);
}
