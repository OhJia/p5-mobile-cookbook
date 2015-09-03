var React = require('react')
//var p5AccelerationShake = require('./p5AccelerationShake.jsx')

var Examples = React.createClass({

  renderLink: function(item, i) {
    return (
      <li key={i}>
        <div className='flex sm-col sm-col-4 py3'>
          <a href={item.href}
             className='bg-p5 btn px2 py4 h2 bold'>
            {item.label}
          </a>
        </div>
      </li>
    )
  },

  renderGroup: function(item, i) {
    return (
      <li key={i}>
        <div className='sm-flex mxn2'>
          <div className='flex-auto px2'>
              <h1>{item.group}</h1>
              <ul className='list-reset'>
                {item.examples.map(this.renderLink)}
              </ul>
          </div>
        </div>
      </li>
    )
  },

  render: function () {
    var styles = {
      container: {
        minHeight: '90vh'
      }
    }
    var links = [
      {
        group: 'p5 Core',
        examples: [
          { href: '/examples/p5AccelerationShake', label: 'p5 Acceleration Shake'},
          { href: '/examples/p5AccelerationBounce', label: 'p5 Acceleration Bounce' },
          { href: '/examples/p5TouchSimpleDraw', label: 'p5 Touch Simple Draw' },
          { href: '/examples/p5MultitouchZoom', label: 'p5 Multitouch Zoom' },
          { href: '/examples/p53DObject', label: 'p5 3D Object' }
        ]
      },
      {
        group: 'p5 + Hammer.js',
        examples: [
          {href: '/examples/p5HammerRotate', label: 'p5 Hammer Rotate'},
          {href: '/examples/p5HammerDoubleTap', label: 'p5 Hammer Double Tap'}
        ]
      }
    ]

    return (
      <div
        className='container px3 py3'
        style={styles.container}>
          {links.map(this.renderGroup)}
      </div>
    )
  }

})

module.exports = Examples


