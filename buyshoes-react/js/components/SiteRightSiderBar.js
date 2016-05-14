const React = require("react");

const Checkout = require("./Checkout");
const ConnectedCart = require("./Cart");

let SiteRightSiderBar = React.createClass({
    render() {
        return(
            <div className="site__right-sidebar">
              <ConnectedCart />
              <Checkout/>
            </div>
        );
    }
});

module.exports = SiteRightSiderBar;
