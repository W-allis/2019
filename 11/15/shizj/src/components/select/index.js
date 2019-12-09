import React, { Component } from 'react'
import EInput from '../input'
import EDropdown from '../dropdown'

import { stop } from '../../decorate/events'

import './index.less'
// import Emitter from '../../utils/emitter'

export default class Select extends Component {
  componentName = 'cr-select'

  state = {
    hoverIndex: null,
    active: false,
    select: ''
  }

  componentDidMount() {
    // this.on('on-change', this.handleChange)
  }

  render() {
    return (
      // todo 整个select为disabled状态时
      <div 
        ref="select"
        className={`
          cr-select
          ${ this.state.disabled ? 'is-disabled' : '' }
          ${ this.state.active ? 'is-active' : '' }
        `}
        onClick={ this.handleClick.bind(this) }>
        <EInput 
          value={ this.state.select || this.props.value } 
          readOnly={ true } 
          icon={`fa fa-angle-down`}
          onClick={ this.handleDropDown.bind(this) }></EInput>
          {
            this.state.active ? (
              <div className={`cr-select-dropdown`}>
                <EDropdown active={ this.state.active }>
                  { this.props.children.map((item, index) => ({ ...item, props: { ...item.props, parent: this, hover: this.state.hoverIndex === index } })) }
                </EDropdown>
              </div>
            ) : ''
          }
      </div>
    )
  }

  close() {
    this.setState({
      active: false
    })
  }

  // todo stop修饰符阻止事件冒泡
  @stop(true)
  handleDropDown() {
    this.setState({
      active: !this.state.active
    })
  }

  handleChange({ value, label }) {
    this.props.onChange(value)
    this.setState({
      select: label || value
    })
  }
  // todo 点击其他地方时，关闭dropdown，类似vue:v-clickoutside
  handleClick(event) {
    const instance = this.refs.select.contains(event.target)
    if (!instance) {
      this.close()
    }
  }
}