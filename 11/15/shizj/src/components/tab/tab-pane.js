import React, { Component } from 'react'

import './tab-pane.less'

export default class TabItem extends Component {
  render() {
    return (
      <div
      className={`
        cr-tab-pane
      `}>
        { this.props.children }
      </div>
    )
  }
}
