import React, { Component } from 'react'

export default class button extends Component {
  // constructor() {
  //   super()
  // }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <button>{this.props.list[0]}</button>
      </div>
    )
  }
}
