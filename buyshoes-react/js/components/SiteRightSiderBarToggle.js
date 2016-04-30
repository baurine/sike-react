const React = require("react");

let SiteRightSiderBarToggle = React.createClass({
    render() {
        return(
            <a className="site__right-sidebar-toggle">
              <img src="img/arrow-icon.svg" />
            </a>
        );
    }
});

module.exports = SiteRightSiderBarToggle;