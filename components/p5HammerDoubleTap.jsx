var React = require('react')
var Single = require('./Single.jsx')


var p5HammerDoubleTap = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Hammer Double Tap',
             description : "Example description",
             fileName : "p5HammerDoubleTap.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5HammerDoubleTap