var Ola = React.createClass({
	getInitialState: function() {
		return { time: '00/00/0000 00:00:00' };
	},
	componentDidMount: function() {
		this.interval = setInterval(this.updateTime, 1000);
	},
	updateTime: function() {
		this.setState({
			time: new Date().toLocaleString()
		});
	},
	render: function() {
		return (
			<h1> {this.state.time} </h1>
		);
	}
});

ReactDOM.render(
	<Ola />,
	document.getElementById('container')
);