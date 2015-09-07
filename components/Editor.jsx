var React = require('react')

var AceEditor, brace;

var Editor = React.createClass({
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

	//var defaultValue = "function onLoad(editor) { \n  console.log(\"i've loaded\");\n}";
    
    return (
        <div id="editor">
			{this.state.mounted ? (<AceEditor
			    mode="javascript"
			    theme="github"
			    name="blah2"
			    fontSize={14}
			    height="6em"
			    value={this.props.example.codeContent} />) : ''}
        </div>
    )
  }
})

module.exports = Editor