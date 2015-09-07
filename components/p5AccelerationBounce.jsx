var React = require('react')
var Single = require('./Single.jsx')

var p5AccelerationBounce = React.createClass({
    // getInitialState: function() {
    //     return ({
    //       lastGistUrl: ''
    //     });
    // },

    // componentDidMount: function() {
    //     $.get("/sketches/p5AccelerationBounce.js", function(result) {
    //       var lastGist = result;
    //       if (this.isMounted()) {
    //         this.setState({
    //           lastGistUrl: lastGist
    //         });
    //       }
    //     }.bind(this));
    // },

    // componentDidMount: function() {
    //     $.ajax({
    //         url: '/sketches/p5AccelerationBounce.js', 
    //         dataType: 'text'
    //     }).done(function(result) {
    //       var lastGist = result;
    //       alert(lastGist);
    //       if (this.isMounted()) {
    //         this.setState({
    //           lastGistUrl: lastGist
    //         });
    //         alert(lastGist);
    //       }
    //     }.bind(this));
    // },

    render : function() {
         var example = {
             title : 'p5 Acceleration Bounce',
             description : "Example description",
             fileName : "p5AccelerationBounce.js"
         }

         return (
             <Single example={example} />
         );
     }
});

module.exports = p5AccelerationBounce