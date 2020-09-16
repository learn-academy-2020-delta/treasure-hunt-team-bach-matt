import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(9).fill(" ")]
    }
  }

  showPosition = (currentSquareIndex) => {
    let {squares} = this.state
    // alert(this.squares.index)
    console.log(square)
  }

  render(){
    let {squares} = this.state
    let squareUnits = squares.map((square, index) => {
      return(
        <Square
        showPosition = {this.showPosition}
        questionMark = {square}
        index = {index}
        key = {index}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id="gameBoard">
          {squareUnits}
        </div>
      </React.Fragment>
    )
  }
}
export default App
