var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Nav = React.createClass({

	render: function () {
		return (
			<nav className='md-flex border-bottom'>
		        <a href='/' 
		          className='btn py2'>
		          p5 MOBILE COOKBOOK
		        </a>
		        <a href='/getting-started'
		          className='btn py2'>
		          Getting Started 
		        </a>
		        <a href='/getting-started'
		          className='btn py2'>
		          Foundation
		        </a>
		        <a href='/examples'
		          className='btn py2'>
		          Examples
		        </a>
		        <a href='/examples'
		          className='btn py2'>
		          Other Resources
		        </a>
		    </nav>
		)
	}

});

module.exports = Nav
