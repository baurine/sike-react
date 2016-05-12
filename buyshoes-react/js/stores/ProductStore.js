const {products} = require("../data");
const EventEmitter = require("events");

let emitter = new EventEmitter();

const _productItems = products;

module.exports = {
  productItems() {
    return _productItems;
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback);
  },
};
