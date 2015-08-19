var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <RouteHandler {...this.props} />
        </body>
      </html>
    )
  }
})

module.exports = Root