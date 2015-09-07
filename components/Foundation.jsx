var React = require('react')
var Header = require('./Header.jsx')

var Foundation = React.createClass({
	testClick : function() {
		if (window) window.alert('hi!!')
	},
	render: function () {
		var page = {
			title: "Foundation",
			description: "description"
		}
		return (
			<main>
		  		<Header page={page} />
		  	</main>
		);
	}
});

module.exports = Foundation