var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Nav = React.createClass({

	render: function () {
		return (
			<nav className='sm-flex border-bottom'>
		        <a href={this.props.baseUrl} 
		          className='btn py2'>
		          Index
		        </a>
		        <a href={this.props.baseUrl + 'getting-started'}
		          className='btn py2'>
		          Getting Started
		        </a>
		        <a href={this.props.baseUrl + 'example'}
		          className='btn py2 sm-show'>
		          Example
		        </a>
		    </nav>
		)
	}

})

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <header>
//         <Link to='/'>Index</Link>
//         <Link to='/getting-started'>Getting Started</Link>
//         <Link to='/example'>Example</Link>
//       </header>
//     )
//   }
// })

module.exports = Nav
