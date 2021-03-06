var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
// var MenuIcon = require('./MenuIcon.jsx')
// var Nav = require('./Nav.jsx')
var Menu= require('./Menu.jsx')

var css = require('../css/base.css')
var style = require('../css/style.css')

var Root = React.createClass({
  render: function () {
    var initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="UTF-16" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable = no" />
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <script src='/shared/p5.min.js' />
          <script src='/shared/hammer.min.js' />
        </head>
        <body>
          <Menu {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src={'/bundle.js'} />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root