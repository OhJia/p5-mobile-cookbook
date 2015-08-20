var React = require('react')

var Examples = React.createClass({

  renderLink: function(item, i) {
    return (
      <li key={i}>
        <a href={item.href}
          className='h2 bold block'>
          {item.label}
        </a>
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
      { href: '/p5-mobile-cookbook/examples/single', label: 'p5 Acceleration Shake' },
      { href: '/p5-mobile-cookbook/examples/single', label: 'p5 Acceleration Bounce' }
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
          <div className='px2 py4'>
          </div>
        </div>
      </div>
    )
  }

})

module.exports = Examples


// var React = require('react')

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <main>
//         <div id="p5Container"></div>       
//       </main>
//     )
//   }
// })

// module.exports = Examples