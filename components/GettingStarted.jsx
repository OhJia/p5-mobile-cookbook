var React = require('react')
var Header = require('./Header.jsx')

var GettingStarted = React.createClass({
	testClick : function() {
		if (window) window.alert('hi!!')
	},
	render: function () {
		var page = {
			title: "Getting Started",
			description: "On your computer install the latest p5.js library"
		}
		// return (
		//   <main>
		// 	  <div className="p2">
		// 		  <h1 onClick={this.testClick}>hi!!!</h1>
		// 		  Getting Started component
		// 	  </div>
		//   </main>
		// )
		return (
			<main>
		  		<Header page={page} />
		  	</main>
		);
	}
});

module.exports = GettingStarted