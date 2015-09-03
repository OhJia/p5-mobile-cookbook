var React = require('react')
//var p5AccelerationShake = require('./p5AccelerationShake.jsx')

var Examples = React.createClass({

  renderLink: function(item, i) {
    return (
      <li key={i}>
        <div className='flex sm-col sm-col-4 py3'>
          <a href={item.href}
             className='bg-purple btn px2 py4 h2 bold'>
            {item.label}
          </a>
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
      { href: '/examples/p5AccelerationShake', label: 'p5 Acceleration Shake'},
      { href: '/examples/p5AccelerationBounce', label: 'p5 Acceleration Bounce' },
      { href: '/examples/p5TouchSimpleDraw', label: 'p5 Touch Simple Draw' },
      { href: '/examples/p5MultitouchZoom', label: 'p5 Multitouch Zoom' },
      { href: '/examples/p53DObject', label: 'p5 3D Object' }
    ]

    return (
      <div
        className='container px3 py3'
        style={styles.container}>
        <div className='sm-flex mxn2'>
          <div className='flex-auto px2'>
            <h1>Examples</h1>
            <ul className='list-reset'>
              {links.map(this.renderLink)}
            </ul>
          </div>
          <div className='flex-auto px2'>
            <h1>Examples 2</h1>
            <ul className='list-reset'>
              {links.map(this.renderLink)}
            </ul>
          </div>
          <div className='px2 py4'>
          </div>
        </div>
      </div>
    )
  }

})

module.exports = Examples


