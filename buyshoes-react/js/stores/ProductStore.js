const {products} = require("../data");
const EventEmitter = require("events");

let emitter = new EventEmitter();

const _productItems = products;

let _isFilter = false;

module.exports = {
  productItems() {
    return _productItems;
  },

  setFilter(filter) {
    _isFilter = filter;
    emitter.emit("change");
  },

  isFilter() {
    return _isFilter;
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback);
  },
};
