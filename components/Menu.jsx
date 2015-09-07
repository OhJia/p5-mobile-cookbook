var React = require('react')
var MenuIcon = require('./MenuIcon.jsx')
var Nav = require('./Nav.jsx')

var Menu = React.createClass({
	styles: {

	  menuWrap: function(isOpen) {
	    return ({
	      position: 'fixed',
	      zIndex: 90,
	      width: '100%',
	      height: '100%',
	      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
	      transition: 'all 0.5s'
	    });
	  },

	  menu: function() {
	    return ({
	      height: '100%'
	    });
	  },

	  item: function() {
	    return ({
	      display: 'block',
	      outline: 'none'
	    });
	  },

	  overlay: function(isOpen) {
	    return ({
	      position: 'fixed',
	      width: '100%',
	      height: '100%',
	      background: 'rgba(0, 0, 0, 0.3)',
	      opacity: isOpen ? 1 : 0,
	      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
	      transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
	      zIndex: 1
	    });
	  },

	  pageWrap: function(isOpen) {
	    return ({
	      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(300px, 0, 0)',
	      transition: 'all 0.5s'
	    });
	  },

	  outerContainer: function(isOpen) {
	    return ({
	      overflow: isOpen ? '' : 'hidden'
	    });
	  }
	},

	getInitialState : function() {
	   return ({
	      isOpen : false,
	      //test: 'nope'
	   });
	},
	// componentDidMount : function() {
	// 	if (window) {
	// 		this.setState({test : 'tested'});
	// 	}
	// },
	toggleMenu: function() {
      // Order important: handle wrappers before setting sidebar state.
      //this.applyWrapperStyles();
      this.setState({ isOpen: !this.state.isOpen });
      //alert(this.state.isOpen);
    },
	render: function () {
		//var text = this.state.test;
		return(
			<div>
	          
	          <div style={ this.styles.menuWrap(this.state.isOpen) }>
	            <div style={ this.styles.menu(this.state.isOpen) } >
			    	<Nav />	              
	            </div>
	            
	          </div>
	          <MenuIcon onClick={ this.toggleMenu } />
	        </div>
		)
	}
});

module.exports = Menu