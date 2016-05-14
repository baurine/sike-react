const React = require("react");
const ProductStore = require("../stores/ProductStore");

let SiteTitle = React.createClass({
  getInitialState: function() {
    return {
      filter: false,
    };
  },

  _filter() {
    let tmp = !this.state.filter;
    this.setState({filter: tmp});
    ProductStore.setFilter(tmp);
  },

  render() {
    let imageSrc = this.state.filter ?
      "img/heart-liked.svg" : "img/heart.svg";

    return(
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img className="title__heart"
             onClick={this._filter.bind(this)}
             src={imageSrc}/>
      </div>
    );
  }
});

module.exports = SiteTitle;
