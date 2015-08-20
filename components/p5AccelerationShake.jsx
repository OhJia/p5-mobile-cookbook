var React = require('react')
var ExamplePage = require('./components/ExamplePage.jsx')

var p5AccelerationShake = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Acceleration Shake',
             description : "Example description",
             fileName : "p5AccelerationShake.js"
         };

         return (
             <ExamplePage example={example} />
         );
     }
});

//module.exports = p5AccelerationShake