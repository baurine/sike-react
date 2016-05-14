const AppDispatcher = require("../dispatcher/Dispatcher");
const EventEmitter = require("events");

let emitter = new EventEmitter();

let _likeItems = {};

let dispatcherToken = AppDispatcher.register((action)=>{
  let handler = handlers[action.type];
  if (handler) {
    handler(action);
  }
});

let handlers = {
  toggleLikeItem(action) {
    let productId = action.productId;
    if (_likeItems[productId]) {
      (_likeItems[productId]).like = !(_likeItems[productId]).like;
    } else {
      _likeItems[productId] = {like: true};
    }

    emitter.emit("change");
  },
};

module.exports = {
  likeItems() {
    return _likeItems;
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
