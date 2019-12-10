import React, { Component } from 'react'
import EInput from '../input'
import EDropdown from '../dropdown'

import { stop } from '../../decorate/events'

import './index.less'
import { provide } from '../../decorate/injectable'
// import Emitter from '../../utils/emitter'

// todo 注入多个实例
export default class Select extends Component {
  componentName = 'cr-select'

  state = {
    hoverIndex: null,
    active: false,
    select: ''
  }

  @provide() select = this

  componentDidMount() {
    // this.on('on-change', this.handleChange)
  }

  render() {
    return (
      <div 
        ref="select"
        className={`
          cr-select
          ${ this.state.disabled ? 'is-disabled' : '' }
          ${ this.state.active ? 'is-active' : '' }
        `}
        onClick={ this.handleClick.bind(this) }>
        <EInput 
          ref="input"
          value={ this.state.select || this.props.value } 
          readOnly={ true } 
          icon={`fa fa-angle-down`}
          placeholder={ this.props.placeholder }
          autoComplete={ this.props.autoComplete }
          autoFocus={ this.props.autoFocus }
          disabled={ this.props.disabled }
          focus={ this.props.focus }
          blur={ this.props.blur }
          onClick={ this.toggle.bind(this) }></EInput>
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
    }, _ => {
      this.props['visible-change'] && this.props['visible-change'](false)
    })
  }

  show() {
    this.setState({
      active: true
    }, _ => {
      this.props['visible-change'] && this.props['visible-change'](true)
    })
  }

  // todo stop修饰符阻止事件冒泡
  @stop(true)
  toggle() {
    this.setState({
      active: !this.state.active
    }, _ => {
      this.props['visible-change'] && this.props['visible-change'](this.state.active)
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

  focus() {
    if (!this.props.disabled) {
      this.refs.input.focus()
      this.show()
    }
  }

  blur() {
    this.refs.input.blur()
    this.close()
  }
}