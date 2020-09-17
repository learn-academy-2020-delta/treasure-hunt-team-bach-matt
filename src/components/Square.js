import React, { Component } from 'react'

class Square extends Component{

  render(){
    let { index } = this.props
    return(
      <React.Fragment>
        <div id="square" onClick={ () => this.props.discover(index)}>
          {this.props.square}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
