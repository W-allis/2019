import React, { Component } from 'react'

import './index.less'

export default class button extends Component {
  // constructor() {
  //   super()
  // }
  componentDidMount() {
    console.log(this.props)
    console.log(this.props.children)
  }
  render() {
    return (
      <button 
        className={`
          cr-button 
          cr-button__${this.props.type || 'default'}
          ${this.props.disabled ? 'cr-button__disabled' : ''}
        `}>
        <span>{this.props.children}</span>
      </button>
    )
  }
}
