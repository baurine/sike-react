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
        return React.createElement("div", { className: "products" });
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

window.onload = function () {
    React.render(React.createElement(App, null), document.querySelector("#root"));
};
