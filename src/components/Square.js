import React, { Component } from 'react'

class Square extends Component{

  assignIndex = () => {
    this.props.handleChange(this.props.index)
  }

  render(){
    let { index } = this.props
    return(
      <React.Fragment>
        <div id="square" onClick = { this.props.tree }>
          {this.props.questionMark}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
