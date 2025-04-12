import React, { Component } from 'react'
import Count from './compants/Count'


export default class Classlifecycle extends Component {

    componentDidMount(){
        console.log("Hello Reactjs");
    }
  render() {
    return (
      <div>
        <Count number={this.state.Count}/>
        <h1>Hello sani</h1>
      </div>
    )
  }
}
