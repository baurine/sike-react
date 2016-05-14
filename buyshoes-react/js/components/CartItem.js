const React = require("react");

const QuantityControl = require("./QuantityControl");
const ProductStore = require("../stores/ProductStore");
const Actions = require("../dispatcher/Actions");

/**************************************************/
/* react cart item */

let CartItem = React.createClass({
  _removeCartItem(e) {
    Actions.removeCartItem(this.props.cartItem.id);
  },

  renderTopPart(product, quantity) {
    return(
      <div className="cart-item__top-part">
        <div className="cart-item__image">
          <img  src={product.imagePath}/>
        </div>

        <div className="cart-item__top-part__middle">
          <div className="cart-item__title">
            {product.name}
          </div>

          <div className="cart-item__price">
            {product.price + (quantity > 1 ? " x " + quantity : "")}
          </div>
        </div>

        <img className="cart-item__trash" src="img/trash-icon.svg"
          onClick={this._removeCartItem}/>
      </div>
    );
  },

  render() {
    let cartItem = this.props.cartItem;
    let products = ProductStore.productItems();
    let product = products[cartItem.id];

    return(
      <div className="cart-item">
        {this.renderTopPart(product, cartItem.quantity)}
        <div className="cart-item__qty">
          <QuantityControl item={cartItem}/>
        </div>
      </div>
    );
  }
});

module.exports = CartItem;
