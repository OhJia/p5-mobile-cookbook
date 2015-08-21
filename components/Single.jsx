var React = require('react')

var Single = React.createClass({
  render: function () {
    return (
      <main>
        <h1>{this.props.example.title}</h1>
        <p>{this.props.example.description}</p>
      	<script src={"/sketches/" + this.props.example.fileName}></script>
        <div id="p5Container"></div>       
      </main>
    )
  }
})

module.exports = Single

