import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        {/* this.props.name with give undefined as name prop is passed to HOC */}
        <button onClick={this.props.incrementCount}>Clicked {this.props.count} times {this.props.name}</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 2)
