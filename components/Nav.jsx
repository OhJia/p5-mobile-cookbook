var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Nav = React.createClass({

	render: function () {
		return (
			<nav className='flex flex-column border-bottom' style={ { height: '100%' } }>
		        <a href='/' 
		          className='btn py2 block'>
		          p5 MOBILE COOKBOOK
		        </a>
		        <a href='/getting-started'
		          className='btn py2 block'>
		          Getting Started 
		        </a>
		        <a href='/getting-started'
		          className='btn py2 block'>
		          Foundation
		        </a>
		        <a href='/examples'
		          className='btn py2 block'>
		          Examples
		        </a>
		        <a href='/examples'
		          className='btn py2 block'>
		          Other Resources
		        </a>
		    </nav>
		)
	}

});

module.exports = Nav
