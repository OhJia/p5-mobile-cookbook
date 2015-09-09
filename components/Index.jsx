var React = require('react')

var IndexHeader = React.createClass({
	render: function() {
		var headerStyle = {
			color: 'white'
		}
		return(
			<div className="px3 bg-p5 mb0" style={headerStyle}>
				<h3 className="mt0 py3">p5 MOBILE COOKBOOK</h3>
				<p>The purpose of this cookbook is to guide artist and designers using p5 to create interactive project on mobile devices, provide documented examples of using p5 on mobile and p5 with other mobile specific JS libraries, and other resources for using p5 on mobile.  
				</p>
				<p>
				With simple setups, most of p5's functionalities work just as well on mobile devices. It's quick and simple to create an interactive sketch on the mobile browser or native app with p5 and Phonegap. In the examples, a few p5 events are highlighted, such as acceleration events and touch events. There are also examples for using p5 with other mobile specific JS libraries, such as Hammer.js and jQuery Mobile. 
				</p>
				<div className="clearfix py2" />
			</div>
		)
	}
})

var FeatureExamples = React.createClass({
	renderLink: function(item, i) {
	    return (
	      <li key={i}>
	        <div className='px2 sm-col sm-col-4 py3 left-0 right-0'>
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
      		<div className='mt0 mb0 mxn2 bg-darken-1'>
	      		<div className='px2'>
	      			<h3 className="mt0 py2 center bg-darken-2">Featured Examples</h3>
		      		<ul className='list-reset'>
		      			{links.map(this.renderLink)}
		      		</ul>
	      		</div>
      		</div>
      	)
	}
})

var Index = React.createClass({
  render: function () {
  	//var style = {}

    return (
      <main className='mb0'>
        <IndexHeader />
        <FeatureExamples />
      </main>
    )
  }
})

module.exports = Index