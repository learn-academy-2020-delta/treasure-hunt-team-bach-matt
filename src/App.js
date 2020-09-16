import React, { Component } from 'react'
import './App.css'
import Square from "./components/Square"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(9).fill(" ")],
      questionMark: "?",
      tree: "tree"
    }
  }

  handleChange = (currentIndex) => {
    let { squares, tree } = this.state

    this.setState({ squares: "tree" })
  }

  render(){
    let { squares, questionMark, tree } = this.state
    let squareUnits = squares.map((square, index) => {
      return(
        <Square
        tree = { this.handleChange }
        questionMark = { questionMark }
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
