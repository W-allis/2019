import React, { Component } from 'react'

import './item.less'

export default class SelectItem extends Component {
  render() {
    return (
      <div
        className={`
          cr-select-item
          ${ this.props.disabled && 'is-disabled' }
        `}>
        { this.props.label }
      </div>
    )
  }
}