
import React, { Component } from 'react'

export default class Lifecycle extends Component {

  constructor(){
    super();
      this.state={
        count :0
      }
  }

  increment(){
       this.setState({ count :this.state.count + 1});
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increment.bind(this)}>clcik me</button>
      </div>
    )
  }
}
