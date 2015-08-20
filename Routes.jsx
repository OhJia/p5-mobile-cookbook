var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var GettingStarted = require('./components/GettingStarted.jsx')
var Example = require('./components/Example.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/getting-started' handler={GettingStarted} />
    <Route path='/example' handler={Example} />
  </Route>
)

module.exports = Routes