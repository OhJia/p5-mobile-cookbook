var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Redirect = Router.Redirect
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var GettingStarted = require('./components/GettingStarted.jsx')
var Examples = require('./components/Examples.jsx')
var Single = require('./components/Single.jsx')
var p5AccelerationShake = require('./components/p5AccelerationShake.jsx')
var p5AccelerationBounce = require('./components/p5AccelerationBounce.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/getting-started' handler={GettingStarted} />
    <Route path='/examples' handler={Examples} />
    <Route path='/examples/p5AccelerationShake' handler={p5AccelerationShake} />
    <Route path='/examples/p5AccelerationBounce' handler={p5AccelerationBounce} />

    // <Redirect from='/p5-mobile-cookbook/getting-started/' to='/p5-mobile-cookbook/getting-started' />
    // <Redirect from='/p5-mobile-cookbook/examples/' to='/p5-mobile-cookbook/examples' />
  </Route>
)

module.exports = Routes
