import React, { Component } from 'react'

import './item.less'
import { inject } from '../../decorate/injectable'
// eslint-disable-next-line
import Emitter from '../../utils/emitter'

export default class SelectItem extends Component {
  componentName = 'cr-select-item'

  @inject(['select']) select

  render() {
    return (
      <div
        className={`
          cr-select-item
          ${ this.props.hover ? 'hover' : '' }
          ${ this.parentProps.value === this.props.value ? 'is-active' : '' }
          ${ this.props.disabled ? 'is-disabled' : '' }
        `}
        onMouseEnter={ this.handleHover.bind(this) }
        onClick={ this.handleClick.bind(this) }>
        { this.props.label }
      </div>
    )
  }

  componentDidMount() {
    // console.log(this)
    // console.log(this.select)
  }

  handleClick(event) {
    if (!this.props.disabled) {
      // todo 建议使用 emit on eventbus处理
      // this.parent.handleChange({ value: this.props.value, label: this.props.label })
      this.dispatch('cr-select', 'handleChange', { value: this.props.value, label: this.props.label })
      // this.parent.close()
      this.dispatch('cr-select', 'close')
    }
  }

  handleHover() {
    // console.log('hover', this.hoverIndex)
    if (!this.props.disabled) {
      this.parent.setState({
        hoverIndex: this.hoverIndex
      })
    }
  }

  get hoverIndex() {
    return this.parentProps.children.findIndex(({ props }) => props.value === this.props.value)
  }
  // todo 建议使用注解将select注入进来
  get parent() {
    return this.props.parent
  }

  get parentProps() {
    return this.parent.props
  }
}