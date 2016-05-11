const React = require("react");

const CartStore = require("../stores/CartStore");

let QuantityControl = React.createClass({
  _addQuantity(e) {
    CartStore.addCartItem(this.props.item.id);
  },

  _substractQuantity(e) {
    CartStore.subtractCartItem(this.props.item.id);
  },

  render() {
    let item = this.props.item;
    let variant = this.props.variant;
    let style = "adjust-qty" + (variant==="gray" ? " adjust-qty--gray" : "");

    return(
      <div className={style}>
        <a className="adjust-qty__button" onClick={this._substractQuantity}>-</a>
        <div className="adjust-qty__number">{item.quantity}</div>
        <a className="adjust-qty__button" onClick={this._addQuantity}>+</a>
      </div>
    );
  }
});

module.exports = QuantityControl;
