const React = require("react");

let {products} = require("../data");

const CartStore = require("../stores/CartStore");

let Checkout = React.createClass({
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },

  componentWillUnMount() {
    CartStore.removeChangeListener(this.forceUpdate.bind(this));
  },

  renderCheckoutLine(title, amount) {
    return(
      <div className="checkout__line">
        <div className="checkout__line__label">
          {title}
        </div>

        <div className="checkout__line__amount">
          {amount}
        </div>
      </div>
    );
  },

  renderButton() {
    return(
      <a className="checkout__button">
        <img  className="checkout__button__icon" src="img/cart-icon.svg"/>
        <div className="checkout__button__label">
          Checkout
        </div>
      </a>
    );
  },

  render() {
    var totalAmount = 0;
    let cartItems = CartStore.getCartItems();
    for (var key in cartItems) {
      let price = products[key].price;
      let amount = price * cartItems[key].quantity;
      totalAmount += amount;
    }

    return(
      <div className="checkout">
        <hr className="checkout__divider"/>
        <input type="text" className="checkout__coupon-input" placeholder="coupon code"></input>
        {this.renderCheckoutLine("Subtotal", totalAmount)}
        {this.renderButton()}
      </div>
    );
  }
});

module.exports = Checkout;
