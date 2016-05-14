import EventEmitter from 'events';

const EVENT_NAME = 'action';

class Dispatcher {
  constructor() {
    this.emitter = new EventEmitter();
  }

  register(handler) {
    this.emitter.addListener(EVENT_NAME, handler);
  }

  unregister(handler) {
    this.emitter.removeListener(EVENT_NAME,handler);
  }

  dispatch(action) {
    this.emitter.emit(EVENT_NAME,action);
  }
}

let AppDispatcher  = new Dispatcher();

module.exports = AppDispatcher;
