var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Nav = React.createClass({

	render: function () {
		return (
			<nav className='bg-white flex flex-column border-bottom' style={ { width: '100%', height: '100%' } }>
		        <a href='/' 
		          className='btn bg-darken-1 color-p5 block'>
		          <h3>p5 MOBILE COOKBOOK</h3>
		        </a>
		        <a href='/getting-started'
		          className='btn py3 block border-bottom clearfix'>
		          <div className="col col-10">Getting Started for Mobile Browser and Phonegap </div>
		          <div className="col col-1 ml2 silver">❯</div>
		        </a>
		        <a href='/foundation'
		          className='btn py3 block border-bottom'>
		          <div className="col col-10">Foundation</div>
		          <div className="col col-1 ml2 silver">❯</div>
		        </a> 
		        <a href='/examples'
		          className='btn py3 block border-bottom'>
		          <div className="col col-10">Examples</div>
		          <div className="col col-1 ml2 silver">❯</div>
		        </a>
		        <a href='/other-resources'
		          className='btn py3 block border-bottom'>
		          <div className="col col-10">Other Resources</div>
		          <div className="col col-1 ml2 silver">❯</div>
		        </a>
		        <div className="px2 py2">
		        <button className="btn btn-outline col-12 py2 mb2 gray">Suggest</button>
		        <button className="btn btn-outline col-12 py2 mb2 gray">Issues</button>
		        </div>
		    </nav>
		)
	}

});

module.exports = Nav
