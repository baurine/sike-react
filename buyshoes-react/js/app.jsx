let App = React.createClass({
    render() {
        return (
            <div className="site">
              <Bg/>
              <SiteMain/>
              <SiteRightSiderBar/>
              <SiteRightSiderBarToggle/>
            </div>
        );
    }
});

let Bg = React.createClass({
    render() {
        return (
            <div className="bg">
                <div className="bg__img"></div>
            </div>
        );
    }
});

let SiteMain = React.createClass({
    render() {
        return (
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

let SiteRightSiderBar = React.createClass({
    render() {
        return (
            <div className="site__right-sidebar">
              <Cart/>
              <Checkout/>
            </div>
        );
    }
});

let SiteRightSiderBarToggle = React.createClass({
    render() {
        return (
            <a className="site__right-sidebar-toggle">
              <img src="img/arrow-icon.svg" />
            </a>
        );
    }
});

let SiteTitle = React.createClass({
    render() {
        return (
            <div className="title">
              <h2>Buy Me Shoes</h2>
              <img className="title__heart" src="img/heart.svg"/>
            </div>
        );
    }
});

let Products = React.createClass({
    render() {
        let product = {
          name: "Jameson Vulc",
          price: 64.99,
          imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
          gender: "man",
        }

        return (
            <div className="products">
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
            </div>
        );
    }
});

let Cart = React.createClass({
    render() {
        return (
            <div className="cart">
            </div>
        );
    }
});

let Checkout = React.createClass({
    render() {
        return (
            <div className="checkout">
              Checkout
            </div>
        );
    }
});

/**************************************************/
/* react prodcuts */

let Product = React.createClass({
  render() {
    let {name, price, imagePath}  = this.props.product;

    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath}/>
          </div>

          <a className="product__add">
            <img className="product__add__icon" src="img/cart-icon.svg"/>
          </a>

          <div className="product__price">
            {price}
          </div>
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>

          <img className="product__heart" src="img/heart.svg"/>
        </div>
      </div>
    ); 
  }
});

/**************************************************/

window.onload = () => {
    React.render(<App/>, document.querySelector("#root"));
}
