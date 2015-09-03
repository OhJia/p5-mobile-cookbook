var React = require('react')

var MenuIcon = React.createClass({
	
	getLineStyle: function(index) {
		return ({
		  position: 'fixed',
		  height: 6,
		  width: 36,
		  right: 32,
		  bottom: 34 + 12 * index,
		  zIndex: 100
		  //opacity: this.state.hover ? 0.6 : 1
		});
	},

	// handleHover: function() {
	// 	this.setState({ hover: !this.state.hover });
	// },

	// getInitialState: function() {
	// 	return { hover: false };
	// },
	
	render: function () {
		var buttonStyle = {
	      position: 'fixed',
	      zIndex: 100,
	      bottom: 20,
	      right: 20,
	      margin: 0,
	      padding: 0,
	      width: 60,
	      height: 60,
	      border: 'none',
	      textIndent: 60,
	      fontSize: 24
	    }

	    return (
	      <div>
	        <button className="btn btn-primary bg-darken-1" id="MenuIcon" onClick={ this.props.onClick }
	          onMouseEnter={ this.handleHover }
	          onMouseLeave={ this.handleHover }
	          style={ buttonStyle }>
	          <span className="bg-navy" style={ this.getLineStyle(0) }></span>
        	  <span className="bg-navy" style={ this.getLineStyle(1) }></span>
        	  <span className="bg-navy" style={ this.getLineStyle(2) }></span>
	        </button>
	      </div>
	    );
  	}
});

module.exports = MenuIcon