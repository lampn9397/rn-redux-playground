import ActionTypes from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  const products = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ActionTypes.BUY_PRODUCT: {

      const index = products.findIndex(x => x.id === action.product.id);

      if (index > -1) {
        products[index].quantity += 1;
      } else {
        products.push({ ...action.product, quantity: 1 });
      }

      return products;
    }
    default:
      return products;
  }
};
