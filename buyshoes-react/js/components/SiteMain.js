const React = require("react");

const SiteTitle = require("./SiteTitle");
const Products = require("./Products");

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

module.exports = SiteMain;