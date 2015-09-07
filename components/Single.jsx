var React = require('react')
var jQuery = require('../shared/jquery-2.1.4.min.js')


var AceEditor, brace;

var Single = React.createClass({
  loadCodeFromSketch: function() {
      jQuery.ajax({
          url: '/sketches/' + this.props.example.fileName,
          dataType: 'text',
          success: function(data) {
            this.setState({codeContent: data});
          }.bind(this)
      });
    },
  toggleCode : function() {
    this.setState({viewCode : !this.state.viewCode });
  },
  getInitialState : function() {
  	return ({
  		mounted : false,
      viewCode : false,
      codeContent : ''
  	});
  },
  componentDidMount : function() {
  	brace = require('react-ace/node_modules/brace');
  	AceEditor  = require('react-ace');

  	require('react-ace/node_modules/brace/mode/javascript')
  	require('react-ace/node_modules/brace/theme/github')

    this.loadCodeFromSketch();
  	
    this.setState({mounted: true});
  },
  componentDidUpdate : function() {
    if (this.refs.ace) {
      this.refs.ace.editor.setOption('animatedScroll', false)
      this.refs.ace.editor.$blockScrolling = true;
      // this.refs.ace.editor.setOption('autoScrollEditorIntoView', false)
      this.refs.ace.editor.setOption('minLines', (this.state.codeContent.match(/\n/g) || []).length + 1)
      this.refs.ace.editor.setOption('maxLines', (this.state.codeContent.match(/\n/g) || []).length + 1)
    }
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
    var editorClassName = (this.state.viewCode ? 'open' : '');
    return (
      <main>
      	<script src={"/sketches/" + this.props.example.fileName}></script>
        <div id="p5Container"></div>           
        <button onClick={this.toggleCode} className="btn btn-primary py2 bg-darken-1" style={ buttonStyle }> 
        	{this.state.viewCode ? 'hide code' : 'view code'}
        </button>
        <div id="editor" className={editorClassName}>
			{this.state.mounted ? (<AceEditor
          ref="ace"
			    mode="javascript"
			    theme="github"
			    name="blah2"
			    fontSize={14}
          height="inherit"
          width="inherit"
			    value={this.state.codeContent} />) : ''}
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


