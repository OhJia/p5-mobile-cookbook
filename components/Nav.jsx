var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <Link to='/'>Index</Link>
        <Link to='/getting-started'>Getting Started</Link>
      </header>
    )
  }
})

module.exports = Header