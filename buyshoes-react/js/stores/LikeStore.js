
const EventEmitter = require("events");

let emitter = new EventEmitter();

let _likeItems = {};

module.exports = {
  likeItems() {
    return _likeItems;
  },

  toggleLikeItem(productId) {
    if (_likeItems[productId]) {
      (_likeItems[productId]).like = !(_likeItems[productId]).like;
    } else {
      _likeItems[productId] = {like: true};
    }

    emitter.emit("change");
  },

  getLikeStatus(productId) {
    if (_likeItems[productId]) {
      return (_likeItems[productId]).like;
    } else {
      return false;
    }
  },

  addChangeListener(callback) {
    emitter.addListener("change", callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback);
  },
};
