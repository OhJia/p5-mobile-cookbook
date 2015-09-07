var React = require('react')
var Header = require('./Header.jsx')

var Examples = React.createClass({

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

  renderGroup: function(item, i) {
    return (
      <li key={i}>
        <div className='mxn2 py1'>
          <div className='px2'>
              <h1 className="py0">{item.group}</h1>
              <ul className='list-reset'>
                {item.examples.map(this.renderLink)}
              </ul>
          </div>
          <div className="clearfix" />
        </div>
      </li>
    )
  },

  render: function () {
    var page = {
      title: "Examples",
      description: "p5 core library, p5 + other libraries, such as Hammer.js, jQuery Mobile, and more"
    }

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
      <main>
        <Header page={page} />
        <div
          className='container px2 py2'
          style={styles.container}>
          <button className="btn btn-primary col-12 py2">Suggest New</button>
            {links.map(this.renderGroup)}
        </div>
      </main>
    )
  }
});

module.exports = Examples




