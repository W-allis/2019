import React from 'react'
import { Component } from '../../libs'

import './header.less'

import { completionUnit } from '../../utils/unit'

export default class Header extends Component {
  static componentName = 'cr-header'

  render() {
    const { height, children } = this.props

    return (
      <header
      className={ this.className('cr-header') }
      style={ this.style({
        height: completionUnit(height) 
      }) }>
        { children }
      </header>
    )
  }
}
