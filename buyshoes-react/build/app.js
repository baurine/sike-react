"use strict";

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "div",
            { className: "site" },
            React.createElement(
                "h1",
                null,
                "Buy Shoes!"
            )
        );
    }
});

window.onload = function () {
    React.render(React.createElement(App, null), document.querySelector("#root"));
};
