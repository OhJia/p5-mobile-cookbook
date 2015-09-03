var React = require('react')
var Single = require('./Single.jsx')


var p5HammerRotate = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Hammer Rotate',
             description : "Example description",
             fileName : "p5HammerRotate.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5HammerRotate