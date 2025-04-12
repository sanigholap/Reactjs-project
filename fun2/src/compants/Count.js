import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
      </div>
    )
  }
}
