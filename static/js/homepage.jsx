class Homepage extends React.Component {
	render(){
		return (
          <div class="center">
            <h3>You are so welcome here ^__^ </h3>
            <img src="/static/img/balloonicorn.jpg" /><br />
            <a href="/cards">Check out the trading cards</a>
          </div>
    );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));