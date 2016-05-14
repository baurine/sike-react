import React from 'react';

// This component should re-render whenever its store emits the "change" event.
class ConnectedStore extends React.Component {
  componentDidMount() {
    this.props.store.addChangeListener(this.forceUpdate.bind(this));
  }

  componentWillUnMount() {
    this.props.store.removeChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    // The `children` property is a function.
    let contentRenderFunction = this.props.children;

    // 1. Read all the data from store by calling reader methods dynamically.
    // 2. Pass the data to `contentRenderFunction`.
    let store = this.props.store;
    let propNames = this.props.propNames;
    let storeProps = {};
    propNames.map((prop) => {
      storeProps[prop] = store[prop]();
    });

    return contentRenderFunction(storeProps);
  }
}

module.exports = ConnectedStore;
