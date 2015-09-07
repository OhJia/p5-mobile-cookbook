var React = require('react')
var Header = require('./Header.jsx')

var GettingStarted = React.createClass({
	showContent: function() {
		//if (window) window.alert('browser!');
		if (this.state.mobileBrowserContent) {
			return (
				<div className="px2">
		  			<h1 className="py0">3 Steps to setup</h1>
		  			<li>
		  				<p>1. Create a new folder and add the latest version of p5.min.js into the folder</p>
		  			</li>
		  			<li>
		  				<p>2. Create a new folder and add the latest version of p5.min.js into the folder</p>
		  			</li>
		  		</div>
			)
		} else {
			return (
				<div className="px3"><h1>phonegap!!!</h1></div>
			)
		}
	},
	setPhonegap: function() {
		if(this.isMounted()){
			this.setState({mobileBrowserContent : false});
		}
	},
	setMobileBrowser: function() {
		if(this.isMounted()){
			this.setState({mobileBrowserContent : true});
		}
	},
	getInitialState : function() {
		return ({
	    	mobileBrowserContent : true
	  	});
	},
	render: function () {
		var page = {
			title: "Getting Started",
			description: "On your computer install the latest p5.js library"
		}
		var mbActive = this.state.mobileBrowserContent ? 'btn-primary' : ''
		var pActive = this.state.mobileBrowserContent ? '' : 'btn-primary'
		return (
			<main>
		  		<Header page={page} />
		  		<div className="flex center">
			  		<button onClick={this.setMobileBrowser} 
			  			className={"btn col-6 py2 not-rounded border-bottom " + mbActive}>
			  			Mobile Browser</button>
			  		<button onClick={this.setPhonegap} 
			  			className={"btn col-6 py2 not-rounded border-left border-bottom " + pActive}>
			  			Phonegap</button>
		  		</div>
		  		{this.showContent()}
		  	</main>
		);
	}
});

module.exports = GettingStarted