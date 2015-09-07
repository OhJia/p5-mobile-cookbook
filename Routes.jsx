var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Redirect = Router.Redirect
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var GettingStarted = require('./components/GettingStarted.jsx')
var Foundation = require('./components/Foundation.jsx')
var OtherResources = require('./components/OtherResources.jsx')
var Examples = require('./components/Examples.jsx')
var Single = require('./components/Single.jsx')
var p5AccelerationShake = require('./components/p5AccelerationShake.jsx')
var p5AccelerationBounce = require('./components/p5AccelerationBounce.jsx')
var p5TouchSimpleDraw = require('./components/p5TouchSimpleDraw.jsx')
var p5MultitouchZoom = require('./components/p5MultitouchZoom.jsx')
var p53DObject = require('./components/p53DObject.jsx')
var p5HammerRotate = require('./components/p5HammerRotate.jsx')
var p5HammerDoubleTap = require('./components/p5HammerDoubleTap.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/getting-started' handler={GettingStarted} />
    <Route path='/foundation' handler={Foundation} />
    <Route path='/other-resources' handler={OtherResources} />
    <Route path='/examples' handler={Examples} />
    <Route path='/examples/p5AccelerationShake' handler={p5AccelerationShake} />
    <Route path='/examples/p5AccelerationBounce' handler={p5AccelerationBounce} />
    <Route path='/examples/p5TouchSimpleDraw' handler={p5TouchSimpleDraw} />
    <Route path='/examples/p5MultitouchZoom' handler={p5MultitouchZoom} />
    <Route path='/examples/p53DObject' handler={p53DObject} />
    <Route path='/examples/p5HammerRotate' handler={p5HammerRotate} />
    <Route path='/examples/p5HammerDoubleTap' handler={p5HammerDoubleTap} />

    // <Redirect from='/p5-mobile-cookbook/getting-started/' to='/p5-mobile-cookbook/getting-started' />
    // <Redirect from='/p5-mobile-cookbook/examples/' to='/p5-mobile-cookbook/examples' />
  </Route>
)

module.exports = Routes
