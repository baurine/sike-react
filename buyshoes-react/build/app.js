"use strict";

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(Bg, null),
      React.createElement(SiteMain, null),
      React.createElement(SiteRightSiderBar, null),
      React.createElement(SiteRightSiderBarToggle, null)
    );
  }
});

var Bg = React.createClass({
  displayName: "Bg",

  render: function render() {
    return React.createElement(
      "div",
      { className: "bg" },
      React.createElement("div", { className: "bg__img" })
    );
  }
});

var SiteMain = React.createClass({
  displayName: "SiteMain",

  render: function render() {
    return React.createElement(
      "div",
      { className: "site__main" },
      React.createElement(
        "div",
        { className: "site__left-sidebar" },
        React.createElement(SiteTitle, null)
      ),
      React.createElement(
        "div",
        { className: "site__content" },
        React.createElement(Products, null)
      )
    );
  }
});

var SiteRightSiderBar = React.createClass({
  displayName: "SiteRightSiderBar",

  render: function render() {
    return React.createElement(
      "div",
      { className: "site__right-sidebar" },
      React.createElement(Cart, null),
      React.createElement(Checkout, null)
    );
  }
});

var SiteRightSiderBarToggle = React.createClass({
  displayName: "SiteRightSiderBarToggle",

  render: function render() {
    return React.createElement(
      "a",
      { className: "site__right-sidebar-toggle" },
      React.createElement("img", { src: "img/arrow-icon.svg" })
    );
  }
});

var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h2",
        null,
        "Buy Me Shoes"
      ),
      React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
    );
  }
});

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var productArr = [];
    for (var key in products) {
      productArr.push(React.createElement(Product, { key: key, product: products[key] }));
    }

    return React.createElement(
      "div",
      { className: "products" },
      productArr
    );
  }
});

var Cart = React.createClass({
  displayName: "Cart",

  render: function render() {
    var cartItmesArr = [];
    for (var key in cartItems) {
      cartItmesArr.push(React.createElement(CartItem, { key: key, cartItem: cartItems[key] }));
    }

    return React.createElement(
      "div",
      { className: "cart" },
      React.createElement(
        "h3",
        { className: "cart__title" },
        "Shopping Cart"
      ),
      React.createElement(
        "div",
        { className: "cart__content" },
        React.createElement(
          "h3",
          { className: "cart__title cart__title--spacer" },
          "Shopping Cart"
        ),
        cartItmesArr
      )
    );
  }
});

var Checkout = React.createClass({
  displayName: "Checkout",

  renderCheckoutLine: function renderCheckoutLine(title, amount) {
    return React.createElement(
      "div",
      { className: "checkout__line" },
      React.createElement(
        "div",
        { className: "checkout__line__label" },
        title
      ),
      React.createElement(
        "div",
        { className: "checkout__line__amount" },
        amount
      )
    );
  },

  renderButton: function renderButton() {
    return React.createElement(
      "a",
      { className: "checkout__button" },
      React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
      React.createElement(
        "div",
        { className: "checkout__button__label" },
        "Checkout"
      )
    );
  },

  render: function render() {
    var totalAmount = 0;
    for (var key in cartItems) {
      var price = products[key].price;
      var amount = price * cartItems[key].quantity;
      totalAmount += amount;
    }

    return React.createElement(
      "div",
      { className: "checkout" },
      React.createElement("hr", { className: "checkout__divider" }),
      React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
      this.renderCheckoutLine("Subtotal", totalAmount),
      this.renderButton()
    );
  }
});

/**************************************************/
/* react prodcut */

var Product = React.createClass({
  displayName: "Product",

  renderDisplay: function renderDisplay(imagePath, price) {
    return React.createElement(
      "div",
      { className: "product__display" },
      React.createElement(
        "div",
        { className: "product__img-wrapper" },
        React.createElement("img", { className: "product__img", src: imagePath })
      ),
      React.createElement(
        "a",
        { className: "product__add" },
        React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
      ),
      React.createElement(
        "div",
        { className: "product__price" },
        price
      )
    );
  }, /* don\'t forget add this ',' */

  renderDesc: function renderDesc(name) {
    return React.createElement(
      "div",
      { className: "product__description" },
      React.createElement(
        "div",
        { className: "product__name" },
        name
      ),
      React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
    );
  },

  render: function render() {
    var _props$product = this.props.product;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;

    return React.createElement(
      "div",
      { className: "product" },
      this.renderDisplay(imagePath, price),
      this.renderDesc(name)
    );
  }
});

/**************************************************/
/* react cart item */

var CartItem = React.createClass({
  displayName: "CartItem",

  renderTopPart: function renderTopPart(product, quantity) {
    return React.createElement(
      "div",
      { className: "cart-item__top-part" },
      React.createElement(
        "div",
        { className: "cart-item__image" },
        React.createElement("img", { src: product.imagePath })
      ),
      React.createElement(
        "div",
        { className: "cart-item__top-part__middle" },
        React.createElement(
          "div",
          { className: "cart-item__title" },
          product.name
        ),
        React.createElement(
          "div",
          { className: "cart-item__price" },
          product.price + (quantity > 1 ? " x " + quantity : "")
        )
      ),
      React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
    );
  },

  renderQty: function renderQty(quantity) {
    return React.createElement(
      "div",
      { className: "cart-item__qty" },
      React.createElement(
        "div",
        { className: "adjust-qty" },
        React.createElement(
          "a",
          { className: "adjust-qty__button" },
          "-"
        ),
        React.createElement(
          "div",
          { className: "adjust-qty__number" },
          quantity
        ),
        React.createElement(
          "a",
          { className: "adjust-qty__button" },
          "+"
        )
      )
    );
  },

  render: function render() {
    var _props$cartItem = this.props.cartItem;
    var id = _props$cartItem.id;
    var quantity = _props$cartItem.quantity;

    var product = products[id];

    return React.createElement(
      "div",
      { className: "cart-item" },
      this.renderTopPart(product, quantity),
      this.renderQty(quantity)
    );
  }
});

/**************************************************/

window.onload = function () {
  React.render(React.createElement(App, null), document.querySelector("#root"));
};

/**************************************************/
/* products */

var products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};

/**************************************************/
/* cart items */

var cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2
  }
};
