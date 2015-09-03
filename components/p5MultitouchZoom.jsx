var React = require('react')
var Single = require('./Single.jsx')


var p5MultitouchZoom = React.createClass({
    render : function() {
         var example = {
             title : 'p5 Multi-touch Zoom',
             description : "Example description",
             fileName : "p5MultitouchZoom.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5MultitouchZoom