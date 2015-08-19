var React = require('react')
//var Router = require('react-router')
//var Link = Router.Link

var Nav = React.createClass({
  render: function () {
    return (
      <header>
        // <Link to='/'>Index</Link>
        // <Link to='/getting-started'>Getting Started</Link>
        <a href='/'>Index</a>
        <a href='/getting-started'>Getting Started</a>
      </header>
    )
  }
})

module.exports = Nav
