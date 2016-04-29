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
      productArr.push(React.createElement(Product, { product: products[key] }));
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
    return React.createElement("div", { className: "cart" });
  }
});

var Checkout = React.createClass({
  displayName: "Checkout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "checkout" },
      "Checkout"
    );
  }
});

/**************************************************/
/* react prodcuts */

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
