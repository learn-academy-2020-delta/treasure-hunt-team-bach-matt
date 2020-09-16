import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="square" onClick={this.props.showPosition}>
          {this.props.index}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
