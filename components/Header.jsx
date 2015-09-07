var React = require('react')

var Header = React.createClass({
	render: function() {
		return (
			<div className="p2 bg-darken-1">
	            <h2 className="color-p5" style={{marginTop: '.5em'}}>{this.props.page.title}</h2>
	            <p>{this.props.page.description}</p>
		    </div>
        )
	}

})

module.exports = Header