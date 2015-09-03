var React = require('react')

var Single = React.createClass({
  render: function () {
  	var buttonStyle = {
      position: 'fixed',
      zIndex: 80,
      bottom: 20,
      left: 20,
      margin: 0,
      padding: 0,
      border: 'none',
      textIndent: 60,
      fontSize: 24
    }

    return (
      <main>
      	<script src={"/sketches/" + this.props.example.fileName}></script>
        <div id="p5Container"></div>   
        <a href={ this.props.example.codeLink }>
            <button className="btn btn-primary py2 bg-darken-1" style={ buttonStyle }> 
            	view code 
            </button>
        </a>    
      </main>
    )
  }
})

module.exports = Single

