import React, { Component } from 'react'
import './index.less'

export default class Dropdown extends Component {
  render() {
    // const Children = this.props.children

    return (
      <div className={`
        cr-dropdown
        ${ this.props.active && 'is-active' }
      `}>

        { this.props.children }
      </div>
    )
  }

  handleDropDown() {

  }
}