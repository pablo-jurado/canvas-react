import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  componentDidMount () {
    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas)
    let ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgb(200,0,0)'
    ctx.fillRect(0, 0, 20, 20)
  }

  render () {
    return (
      <div>
        <canvas ref='myCanvas' width='500' height='600' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
