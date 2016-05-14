const React = require("react");
const Ps = require("perfect-scrollbar");

const CartItem = require("./CartItem");

let Cart = React.createClass({
    componentDidMount() {
      let $content = React.findDOMNode(this.refs.content);
      Ps.initialize($content);
    },

    render() {
        let cartItmesArr = [];
        let {cartItems} = this.props;
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

/***********************************************************/

const ConnectedStore = require("./ConnectedStore");
const CartStore = require("../stores/CartStore");

class ConnectedCart extends React.Component {
  render() {
    return(
      <ConnectedStore store={CartStore} propNames={['cartItems']}>
        { props => <Cart {...props}/>}
      </ConnectedStore>
    );
  }
}

module.exports = ConnectedCart;
