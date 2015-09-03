var React = require('react')
var Single = require('./Single.jsx')


var p5TouchSimpleDraw = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Touch Simple Draw',
             description : "Example description",
             fileName : "p5TouchSimpleDraw.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5TouchSimpleDraw