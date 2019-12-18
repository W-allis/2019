import React, { Component } from 'react'

import './index.less'

export default class button extends Component {
  // constructor() {
  //   super()
  // }
  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.children)
  }
  render() {
    return (
      <button 
        className={`
          cr-button 
          cr-button__${this.props.type || 'default'}
          cr-button__${this.props.size || 'medium'}
          ${this.props.disabled ? 'is-disabled' : ''}
        `}
        onClick={ this.handleClick.bind(this) }
        >
        {this.props.children}
      </button>
    )
  }

  handleClick(event) {
    // console.log(this.props)
    this.props.onClick(event)
  }
}
