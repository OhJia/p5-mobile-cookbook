var React = require('react')

var ExamplePage = React.createClass({
  render: function () {
    return (
      <main>
      	<script src='/shared/p5.min.js' />
      	<script src="/sketches/" + {this.props.example.fileName}></script>
      	<div>
      		<h1>{this.props.example.title}</h1>
      		<p>{this.props.example.description}</p>
        	<div id="p5Container"></div>  
       	</div>     
      </main>
    )
  }
})

module.exports = ExamplePage

