import ActionTypes from '../actions';

const initialState = {
  fullname: 'Phan Ngoc Lam',
  birthday: '09-03-1997',
  gender: 'male',
  cash: 1000,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}