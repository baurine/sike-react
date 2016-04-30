//const Ps = require("../node_modules/perfect-scrollbar/index")
//const React = require("../node_modules/react/react")
const Ps = require("perfect-scrollbar");
const React = require("react");
//let {pi, e} = require("./pie");

let App = React.createClass({
    render() {
        return(
            <div className="site">
              <Bg/>
              <SiteMain/>
              <SiteRightSiderBar/>
              <SiteRightSiderBarToggle/>
            </div>
        );
    }
});

let Bg = React.createClass({
    render() {
        return(
            <div className="bg">
                <div className="bg__img"></div>
            </div>
        );
    }
});

let SiteMain = React.createClass({
    render() {
        return(
            <div className="site__main">
              <div className="site__left-sidebar">
                <SiteTitle/>
              </div>

              <div className="site__content">
                <Products/>
              </div>
            </div>
        );
    }
});

let SiteRightSiderBar = React.createClass({
    render() {
        return(
            <div className="site__right-sidebar">
              <Cart/>
              <Checkout/>
            </div>
        );
    }
});

let SiteRightSiderBarToggle = React.createClass({
    render() {
        return(
            <a className="site__right-sidebar-toggle">
              <img src="img/arrow-icon.svg" />
            </a>
        );
    }
});

let SiteTitle = React.createClass({
    render() {
        return(
            <div className="title">
              <h2>Buy Me Shoes</h2>
              <img className="title__heart" src="img/heart.svg"/>
            </div>
        );
    }
});

let Products = React.createClass({
    render() {
        let productArr = [];
        for (var key in products) {
          productArr.push(<Product key={key} product={products[key]}/>);
        }

        return(
            <div className="products">
              {productArr}
            </div>
        );
    }
});

let Cart = React.createClass({
    componentDidMount() {
      let $content = React.findDOMNode(this.refs.content);
      Ps.initialize($content);
    },

    render() {
        let cartItmesArr = [];
        for (var key in cartItems) {
          cartItmesArr.push(<CartItem key={key} cartItem={cartItems[key]}/>);
        }

        return(
            <div className="cart">
              <h3 className="cart__title">Shopping Cart</h3>
              <div className="cart__content" ref="content">
                <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                {cartItmesArr}
              </div>
            </div>
        );
    }
});

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
  }, /* don\'t forget add this ',' */

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

/**************************************************/
/* react cart item */

let CartItem = React.createClass({
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

        <img className="cart-item__trash" src="img/trash-icon.svg"/>
      </div>       
    );
  },

  /*
  renderQty(quantity) {
    return(
      <div className="cart-item__qty">
        <div className="adjust-qty">
          <a className="adjust-qty__button">-</a>
          <div className="adjust-qty__number">{quantity}</div>
          <a className="adjust-qty__button">+</a>
        </div>
      </div>      
    );
  },
  */

  render() {
    let cartItem = this.props.cartItem;
    let product = products[cartItem.id];

    return(
      <div className="cart-item">
        {this.renderTopPart(product, cartItem.quantity)}
        {/* this.renderQty(quantity) */}
        <div className="cart-item__qty">
          <QuantityControl item={cartItem}/>
        </div>
      </div>
    );
  }
});

let QuantityControl = React.createClass({
  render() {
    let item = this.props.item;
    let variant = this.props.variant;
    let style = "adjust-qty" + (variant==="gray" ? " adjust-qty--gray" : "");

    return(
      <div className={style}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{item.quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
});

/**************************************************/

window.onload = function () {
    React.render(React.createElement(App, null), document.querySelector("#root"));
};

/**************************************************/
/* products */

let products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man",
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};

/**************************************************/
/* cart items */

let cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1,
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2,
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1,
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    quantity: 4,
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    quantity: 3,
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2,
  },
};