var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Nav = React.createClass({

	render: function () {
		return (
			<nav className='bg-white flex flex-column border-bottom' style={ { width: '100%', height: '100%' } }>
		        <a href='/' 
		          className='btn py3 block border-bottom'>
		          p5 MOBILE COOKBOOK
		        </a>
		        <a href='/getting-started'
		          className='btn py2 block border-bottom'>
		          Getting Started for Mobile Browser and Phonegap 
		        </a>
		        <a href='/getting-started'
		          className='btn py2 block border-bottom'>
		          Foundation
		        </a>
		        <a href='/examples'
		          className='btn py2 block border-bottom'>
		          Examples
		        </a>
		        <a href='/examples'
		          className='btn py2 block border-bottom'>
		          Other Resources
		        </a>
		    </nav>
		)
	}

});

module.exports = Nav
