var React = require('react')

var GettingStarted = React.createClass({
	testClick : function() {
		if (window) window.alert('hi!!')
	},
	render: function () {
	return (
	  <main>
		  <div className="p2">
			  <h1 onClick={this.testClick}>hi!!!</h1>
			  Getting Started component
		  </div>
	  </main>
	)
	}
})

module.exports = GettingStarted