const React = require("react");
const Product = require("./Product");
const products = require("../data").products;

const LikeStore = require("../stores/LikeStore");

let Products = React.createClass({
    componentDidMount() {
      LikeStore.addChangeListener(this.forceUpdate.bind(this));
    },

    render() {
        let productArr = [];
        for (var key in products) {
          productArr.push(<Product key={key} product={products[key]} like={LikeStore.getLikeStatus(key)}/>);
        }

        return(
            <div className="products">
              {productArr}
            </div>
        );
    }
});

module.exports = Products;
