import React, { Component } from 'react'

export default class Tooltip extends Component {
  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div
      className={`
        cr-tooltip
      `}>
        { this.props.children }
      </div>
    )
  }
}
