var React = require('react')
var Editor = require('./Editor.jsx')

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

	//var defaultValue = "function onLoad(editor) { \n  console.log(\"i've loaded\");\n}";
    
    return (
      <main>
      	<script src={"/sketches/" + this.props.example.fileName}></script>
        <div id="p5Container"></div>           
        <button className="btn btn-primary py2 bg-darken-1" style={ buttonStyle }> 
        	view code         		
        </button>
        <Editor />
      </main>
    )
  }
})

module.exports = Single



// function onChange(newValue) {
//   console.log('change',newValue)
// }

// render a first


