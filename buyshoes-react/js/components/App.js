const React = require("react");

const Bg = require("./Bg");
const SiteMain = require("./SiteMain");
const SiteRightSiderBar = require("./SiteRightSiderBar");
const SiteRightSiderBarToggle = require("./SiteRightSiderBarToggle");

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

module.exports = App;