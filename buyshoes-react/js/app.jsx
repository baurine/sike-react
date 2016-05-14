//const Ps = require("../node_modules/perfect-scrollbar/index")
//const React = require("../node_modules/react/react")
//const Ps = require("perfect-scrollbar");
const React = require("react");
//let {products, cartItems} = require("./data.js");
const App = require("./components/App");

const EnableLogging = require("./LoggingService");

/**************************************************/

window.onload = function () {
    //React.render(React.createElement(App, null), document.querySelector("#root"));
    EnableLogging();
    React.render(<App/>, document.querySelector("#root"));
};
