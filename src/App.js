import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(25).fill("?")],
      treasure: Math.floor(Math.random()* 24),
      bombLocation: [{ bomb: Math.floor(Math.random()* 24 )}, { bomb: Math.floor(Math.random()* 24 )}, { bomb: Math.floor(Math.random()* 24 )}],
      countdown: 10
    }
  }

  componentDidMount = () => {
    let { treasure, bombLocation } = this.state
    while (treasure === bombLocation[0] || treasure === bombLocation[1] || treasure === bombLocation[2]) {
      treasure = Math.floor(Math.random() * 24)
      this.setState( { treasure: treasure })
      this.setState( { bombLocation: bombLocation })
    }
  }

  handleChange = (i) => {
    let { squares, treasure, countdown, bombLocation } = this.state
    console.log(bombLocation)
    console.log(`treasure: ${treasure}`)
    countdown --
    if (i !== treasure && countdown === 0){
        alert("Sorry you lost.")
      } else if (i === bombLocation[0].bomb || i === bombLocation[1].bomb || i === bombLocation[2].bomb) {
        squares[i] = "💣"
        setTimeout(function() {alert("You lose.");}, 300)
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
    window.location.reload()
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
