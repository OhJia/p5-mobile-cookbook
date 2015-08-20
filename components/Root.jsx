var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Nav = require('./Nav.jsx')
var css = require('../css/base.css')

var Root = React.createClass({
  render: function () {
    var initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <script src='/shared/p5.min.js' />

        </head>
        <body className='p2'>
          <Nav {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src={this.props.baseUrl + 'bundle.js'} />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root