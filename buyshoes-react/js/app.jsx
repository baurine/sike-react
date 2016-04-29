let App = React.createClass({
    render() {
        return (
            <div className="site">
                <h1>Buy Shoes!</h1>
            </div>
        );
    }
});

window.onload = () => {
    React.render(<App/>, document.querySelector("#root"));
}