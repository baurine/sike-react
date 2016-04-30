const React = require("react");

let {products, cartItems} = require("../data");

let Checkout = React.createClass({
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