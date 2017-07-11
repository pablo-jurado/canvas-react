import React from 'react'
import ReactDOM from 'react-dom'
import ReactKonva from 'react-konva'
import './index.css'
const {Layer, Rect, Stage, Group} = ReactKonva

let appState = {
  x: 0,
  y: 0
}

function checkArrow (event) {
  const keyValue = event.keyCode
  const left = 37
  const up = 38
  const right = 39
  const down = 40

  if (keyValue === left) appState.x -= 10
  if (keyValue === right) appState.x += 10
  if (keyValue === up) appState.y -= 10
  if (keyValue === down) appState.y += 10
}

window.addEventListener('keydown', checkArrow)

function MyRect (state) {
  return (
    <Group>
      <Rect x={state.x}
        y={state.y}
        width='50'
        height='50'
        fill='grey'
      />
    </Group>
  )
}

function App (state) {
  return (
    <Stage width={300} height={300}>
      <Layer>
        {MyRect(state)}
      </Layer>
    </Stage>
  )
}

function renderNow () {
  ReactDOM.render(App(appState), document.getElementById('root'))

  window.requestAnimationFrame(renderNow)
}
window.requestAnimationFrame(renderNow)

// class App extends React.Component {
//   componentDidMount () {
//     let canvas = ReactDOM.findDOMNode(this.refs.myCanvas)
//     let ctx = canvas.getContext('2d')
//
//     ctx.fillStyle = 'rgb(200,0,0)'
//     ctx.fillRect(0, 0, 20, 20)
//   }
//
//   render () {
//     return (
//       <div>
//         <canvas ref='myCanvas' width='500' height='600' />
//       </div>
//     )
//   }
// }
