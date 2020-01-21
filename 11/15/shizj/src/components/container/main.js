import React from 'react'
import { Component } from '../../libs'

import './main.less'

export default class Main extends Component {
  render() {
    const { children } = this.props
    return (
      <main
      className={ this.className('cr-main') }>
        { children }
      </main>
    )
  }
}
