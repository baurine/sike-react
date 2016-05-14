import AppDispatcher from './dispatcher/Dispatcher';

module.exports = function enableLoggin() {
  AppDispatcher.register((action)=>{
    console.log(JSON.stringify({
      time: new Date(),
      action,
    }, undefined, 2));
  });
}
