const React = require("react");
const Product = require("./Product");
let products = require("../data").products;

let Products = React.createClass({
    render() {
        let productArr = [];
        for (var key in products) {
          productArr.push(<Product key={key} product={products[key]}/>);
        }

        return(
            <div className="products">
              {productArr}
            </div>
        );
    }
});

module.exports = Products;