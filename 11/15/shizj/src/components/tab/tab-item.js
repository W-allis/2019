import React, { Component } from 'react'

import './tab-item.less'

export default class TabItem extends Component {

  componentDidMount() {
    // to do 检验name规则
    if (this.props.name) {}
    // console.log(this)
  }

  render() {
    return (
      <div
      onClick={ this.handleClick.bind(this) }
      className={`
        cr-tab-item 
        ${ this.props.isActive ? 'is-active' : '' }
        ${ this.props.disabled ? 'is-disabled' : '' }
      `}>
        { this.props.label }
      </div>
    )
  }

  handleClick(event) {
    if (!this.props.disabled) {
      this.props.onClick(this.props.name)
    }
    this.props.onTabClick(event, this)
  }
}
