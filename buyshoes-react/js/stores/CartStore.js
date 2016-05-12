
const EventEmitter = require("events");

let emitter = new EventEmitter();

let _cartItems = {};

module.exports = {
  cartItems() {
    return _cartItems;
  },

  getCartItems() {
    return _cartItems;
  },

  addCartItem(productId) {
    if (_cartItems[productId]) {
      (_cartItems[productId]).quantity++;
    } else {
      _cartItems[productId] = {id: productId, quantity: 1};
    }

    emitter.emit("change");
  },

  subtractCartItem(productId) {
    if (_cartItems[productId]) {
      (_cartItems[productId]).quantity--;
      if ((_cartItems[productId]).quantity==0) {
        delete _cartItems[productId];
      }
    }

    emitter.emit("change");
  },

  removeCartItem(productId) {
    if (_cartItems[productId]) {
      delete _cartItems[productId];
    }

    emitter.emit("change");
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback);
  },
};
