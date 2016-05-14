import AppDispatcher from './Dispatcher';

module.exports = {
  addCartItem(productId) {
    AppDispatcher.dispatch({
      type: 'addCartItem',
      productId: productId
    });
  },

  subtractCartItem(productId) {
    AppDispatcher.dispatch({
      type: 'subtractCartItem',
      productId: productId
    });
  },

  removeCartItem(productId) {
    AppDispatcher.dispatch({
      type: 'removeCartItem',
      productId: productId
    });
  }
}
