const React = require("react");

let QuantityControl = React.createClass({
  render() {
    let item = this.props.item;
    let variant = this.props.variant;
    let style = "adjust-qty" + (variant==="gray" ? " adjust-qty--gray" : "");

    return(
      <div className={style}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{item.quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
});

module.exports = QuantityControl;