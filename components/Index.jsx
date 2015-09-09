var React = require('react')

var IndexHeader = React.createClass({
	render: function() {
		var headerStyle = {
			color: 'white'
		}
		return(
			<div className="px3" style={headerStyle}>
				<h3 className="mt0 py3">p5 MOBILE COOKBOOK</h3>
				<p>A JavaScript library with the goal of making coding accessible for artists, designers, educators, and beginners. It provides an environment where users can sketch their ideas in code, by simply . If you are new to p5, head over to p5js.org and read through the p5 Get Started page. It\''s also easy to start coding with p5 by playing with examples in the Reference and Examples page. 
				</p>
			</div>
		)
	}
})

var FeatureExamples = React.createClass({
	renderLink: function(item, i) {
	    return (
	      <li key={i}>
	        <div className='sm-col sm-col-4 py3 left-0 right-0'>
	          <a href={item.href}
	             className='bg-p5 btn px2 py4 h2 bold block'>
	            {item.label}
	          </a>
	        </div>
	      </li>
	    )
	  },
	render: function() {
		var links = [
          { href: '/examples/p5AccelerationShake', label: 'p5 Acceleration Shake'},
          { href: '/examples/p5AccelerationBounce', label: 'p5 Acceleration Bounce' },
          { href: '/examples/p5TouchSimpleDraw', label: 'p5 Touch Simple Draw' },
          { href: '/examples/p5MultitouchZoom', label: 'p5 Multitouch Zoom' }
      	]
      	return(
      		<div>{links.map(this.renderLink)}</div>
      	)
	}
})

var Index = React.createClass({
  render: function () {
  	//var style = {}

    return (
      <main className="bg-p5">
        <IndexHeader />
        <FeatureExamples />
      </main>
    )
  }
})

module.exports = Index