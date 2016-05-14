import AppDispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';

let emitter = new EventEmitter();

let _cartItems = {};

let dispatcherToken = AppDispatcher.register((action)=>{
  let handler = handlers[action.type];
  if (handler) {
    handler(action);
  }
});

let handlers = {
  addCartItem(action) {
    let productId = action.productId;
    if (_cartItems[productId]) {
      (_cartItems[productId]).quantity++;
    } else {
      _cartItems[productId] = {id: productId, quantity: 1};
    }

    emitter.emit("change");
  },

  subtractCartItem(action) {
    let productId = action.productId;
    if (_cartItems[productId]) {
      (_cartItems[productId]).quantity--;
      if ((_cartItems[productId]).quantity==0) {
        delete _cartItems[productId];
      }
    }

    emitter.emit("change");
  },

  removeCartItem(action) {
    let productId = action.productId;
    if (_cartItems[productId]) {
      delete _cartItems[productId];
    }

    emitter.emit("change");
  },
};

module.exports = {
  cartItems() {
    return _cartItems;
  },

  getCartItems() {
    return _cartItems;
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback);
  },
};
