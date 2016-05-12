const React = require("react");

const QuantityControl = require("./QuantityControl");
const CartStore = require("../stores/CartStore");
const {addCartItem} = CartStore;

const LikeStore = require("../stores/LikeStore");

/**************************************************/
/* react prodcut */

let Product = React.createClass({
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },

  componentWillUnMount() {
    CartStore.removeChangeListener(this.forceUpdate.bind(this));
  },

  _buyProduct(e) {
    addCartItem(this.props.product.id);
  },

  _likeItem(e) {
    LikeStore.toggleLikeItem(this.props.product.id);
  },

  renderDisplay(product, cartItem) {
    let opt = cartItem ?
      (<QuantityControl item={cartItem} variant="gray"/>) :
      (<a className="product__add" onClick={this._buyProduct}>
         <img className="product__add__icon" src="img/cart-icon.svg"/>
       </a>);

    return(
      <div className="product__display">
        <div className="product__img-wrapper">
          <img className="product__img" src={product.imagePath}/>
        </div>

        {opt}

        <div className="product__price">{product.price}</div>
      </div>
    );
  },

  renderDesc(name) {
    let imageSrc = this.props.like ?
      "img/heart-liked.svg" : "img/heart.svg";

    return(
      <div className="product__description">
        <div className="product__name">
          {name}
        </div>

        <img className="product__heart" src={imageSrc} onClick={this._likeItem.bind(this)}/>
      </div>
    );
  },

  render() {
    let product = this.props.product;
    let cartItems = CartStore.getCartItems();
    let cartItem = cartItems[product.id];

    return(
      <div className="product">
        {this.renderDisplay(product, cartItem)}
        {this.renderDesc(product.name)}
      </div>
    );
  }
});

module.exports = Product;
