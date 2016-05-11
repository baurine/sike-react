const React = require("react");
const Ps = require("perfect-scrollbar");

const CartItem = require("./CartItem");

const CartStore = require("../stores/CartStore");

let Cart = React.createClass({
    componentDidMount() {
      let $content = React.findDOMNode(this.refs.content);
      Ps.initialize($content);

      CartStore.addChangeListener(this.forceUpdate.bind(this));
    },

    componentWillUnMount() {
      CartStore.removeChangeListener(this.forceUpdate.bind(this));
    },

    render() {
        let cartItmesArr = [];
        let cartItems = CartStore.getCartItems();
        for (var key in cartItems) {
          cartItmesArr.push(<CartItem key={key} cartItem={cartItems[key]}/>);
        }

        return(
            <div className="cart">
              <h3 className="cart__title">Shopping Cart</h3>
              <div className="cart__content" ref="content">
                <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                {cartItmesArr}
              </div>
            </div>
        );
    }
});

module.exports = Cart;
