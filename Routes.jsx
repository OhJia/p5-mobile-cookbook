var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Redirect = Router.Redirect
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var GettingStarted = require('./components/GettingStarted.jsx')
var Example = require('./components/Example.jsx')

var Routes = (
  <Route handler={Root} path='/p5-mobile-cookbook/'>
    <DefaultRoute handler={Index} />
    <Route path='getting-started/' handler={GettingStarted} />
    <Route path='example/' handler={Example} />

    <Redirect from='/p5-mobile-cookbook/getting-started/' to='/p5-mobile-cookbook/getting-started' />
    <Redirect from='/p5-mobile-cookbook/example/' to='/p5-mobile-cookbook/example' />
  </Route>
)

module.exports = Routes