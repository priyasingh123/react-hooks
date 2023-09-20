import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props 
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

//we can pass arguments to HOC also 
export default withCounter (HoverCounter, 4)
