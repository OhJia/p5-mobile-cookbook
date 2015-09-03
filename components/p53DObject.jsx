var React = require('react')
var Single = require('./Single.jsx')


var p53DObject = React.createClass({
    render : function() {
         var example = {
             title : 'p5 3D Object',
             description : "Example description",
             fileName : "p53DObject.js"
         };

         return (
             <Single example={example} />
         );
     }
});

module.exports = p53DObject