var React = require('react')


var AceEditor, brace;

var Single = React.createClass({
  getInitialState : function() {
  	return ({
  		mounted : false
  	});
  },
  componentDidMount : function() {
	brace = require('react-ace/node_modules/brace');
	AceEditor  = require('react-ace');

	require('react-ace/node_modules/brace/mode/javascript')
	require('react-ace/node_modules/brace/theme/github')

	// require({'/sketches/' + this.props.example.fileName})

  	this.setState({mounted: true});
  },
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
        <div id="editor">
			{this.state.mounted ? (<AceEditor
			    mode="javascript"
			    theme="github"
			    name="blah2"
			    fontSize={14}
			    height="6em"
			    value={this.props.example.codeContent} />) : ''}
        </div>
      </main>
    )
  }
})

module.exports = Single



// function onChange(newValue) {
//   console.log('change',newValue)
// }

// render a first


