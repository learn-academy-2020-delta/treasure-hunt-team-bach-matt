import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(9).fill("?")],
      treasure: Math.floor(Math.random()* 8),
      countdown: 5
    }
  }

  handleChange = (i) => {
    let { squares, treasure, countdown } = this.state
    countdown --
    if (i !== treasure && countdown === 0){
        alert("Sorry you lost.")
      } else if(i === treasure) {
        squares[i] = "🏆"
        setTimeout(function() {alert("You got it! Play again?");}, 300)
      } else {
        squares[i] = "🌴"
      } 
    console.log(squares)
    this.setState({ squares: squares }) 
    this.setState({countdown: countdown})
  }

  handleReset = () => {
    this.setState({squares:[...Array(9).fill("?")]})
    this.setState({treasure:Math.floor(Math.random()* 8)})
    this.setState({countdown: 5})
  }

  render(){
    let { squares, questionMark } = this.state
    let squareUnits = squares.map((square, index) => {
      return(
        <Square
        discover = { this.handleChange }
        square = {square}
        questionMark = { questionMark }
        index = {index}
        key = {index}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <h4>COUNTER: {this.state.countdown}</h4>
        <div id="gameBoard">
          {squareUnits}
        </div>
        <button onClick={this.handleReset}>
          Reset
        </button>
      </React.Fragment>
    )
  }
}
export default App
