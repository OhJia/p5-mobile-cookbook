var React = require('react')
var Header = require('./Header.jsx')

var OtherResources = React.createClass({
	testClick : function() {
		if (window) window.alert('hi!!')
	},
	render: function () {
		var page = {
			title: "Other Resources",
			description: "description"
		}
		return (
			<main>
		  		<Header page={page} />
		  	</main>
		);
	}
});

module.exports = OtherResources