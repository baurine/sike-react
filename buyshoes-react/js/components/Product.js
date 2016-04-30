const React = require("react");

const QuantityControl = require("./QuantityControl");
let cartItems = require("../data").cartItems;

/**************************************************/
/* react prodcut */

let Product = React.createClass({
  renderDisplay(product, cartItem) {
    let opt = cartItem ?
      (<QuantityControl item={cartItem} variant="gray"/>) :
      (<a className="product__add">
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
    return(
      <div className="product__description">
        <div className="product__name">
          {name}
        </div>

        <img className="product__heart" src="img/heart.svg"/>
      </div>      
    );
  },

  render() {
    let product = this.props.product;
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
