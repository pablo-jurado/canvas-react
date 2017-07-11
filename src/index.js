import React from 'react'
import ReactDOM from 'react-dom'
import ReactKonva from 'react-konva'
import './index.css'

const {Layer, Rect, Stage, Group} = ReactKonva;

// try drag& drop rectangle
class MyRect extends React.Component {
    changeSize() {
        this.refs.rect.to({
            scaleX: Math.random() + 0.8,
            scaleY: Math.random() + 0.8,
            duration: 0.2
        });
    }
    render() {
        return (
            <Group>
                <Rect
                    ref="rect"
                    width="50"
                    height="50"
                    fill="green"
                    draggable="true"
                    onDragEnd={this.changeSize.bind(this)}
                    onDragStart={this.changeSize.bind(this)}
                />
          </Group>
        );
    }
}

function App() {
    return (
      <Stage width={700} height={700}>
        <Layer>
            <MyRect/>
        </Layer>
      </Stage>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))


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
