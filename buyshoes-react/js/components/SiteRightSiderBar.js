const React = require("react");

const Cart = require("./Cart");
const Checkout = require("./Checkout");

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

module.exports = SiteRightSiderBar;