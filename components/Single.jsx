var React = require('react')

var Single = React.createClass({
  render: function () {
    return (
      <main>
      	<script src={"/sketches/" + this.props.example.fileName}></script>
        <div id="p5Container"></div>       
      </main>
    )
  }
})

module.exports = Single

