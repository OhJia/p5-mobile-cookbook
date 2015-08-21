var React = require('react')
var Single = require('./Single.jsx')


var p5AccelerationBounce = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Acceleration Bounce',
             description : "Example description",
             fileName : "p5AccelerationBounce.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5AccelerationBounce