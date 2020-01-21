import React from 'react'

import { Component } from '../../libs'

import './footer.less'

import { completionUnit } from '../../utils/unit'

export default class Footer extends Component {
  static componentName = 'cr-footer'

  render() {
    const { height, children } = this.props

    return (
      <footer
      className={ this.className('cr-footer') }
      style={ this.style({
        height: completionUnit(height) 
      }) }>
        { children }
      </footer>
    )
  }
}
