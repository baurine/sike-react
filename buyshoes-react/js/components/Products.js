const React = require("react");
const Product = require("./Product");

const ProductStore = require("../stores/ProductStore");
const LikeStore = require("../stores/LikeStore");

let Products = React.createClass({
    componentDidMount() {
      LikeStore.addChangeListener(this.forceUpdate.bind(this));
      ProductStore.addChangeListener(this.forceUpdate.bind(this));
    },

    render() {
        let productArr = [];
        let products = ProductStore.productItems();
        for (var key in products) {
          if (!ProductStore.isFilter()) {
            productArr.push(<Product key={key}
              product={products[key]}
              like={LikeStore.getLikeStatus(key)}/>);
          } else {
            if (LikeStore.getLikeStatus(key)) {
              productArr.push(<Product key={key}
                product={products[key]}
                like={true}/>);
            }
          }
        }

        return(
            <div className="products">
              {productArr}
            </div>
        );
    }
});

module.exports = Products;
