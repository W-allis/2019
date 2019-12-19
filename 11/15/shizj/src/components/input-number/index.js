import React, { Component } from 'react'

import Input from '../input'

import './index.less'

export default class InputNumber extends Component {
  render() {
    return (
      <div
      className={`
        cr-input-number
        cr-input-number__${ this.props.size || 'medium' }
        ${ this.props.disabled ? 'is-disabled' : '' }
        `}
      >
        <span
          className={`
            cr-input-button
            cr-input-decrease
            ${ this.dedisabled ? 'is-disabled' : '' }
          `}
        onClick={ this.decrease.bind(this) }
        >-</span>
        <span
          className={`
            cr-input-button
            cr-input-increase
            ${ this.indisabled ? 'is-disabled' : '' }
          `}
          onClick={ this.increase.bind(this) }
        >+</span>
        <Input 
          ref="input"
          size={ this.props.size }
          value={ this.props.value } 
          disabled-input={ this.props['disabled-input'] } 
          placeholder={ this.props.placeholder }
          autoComplete={ this.props.autoComplete }
          autoFocus={ this.props.autoFocus }
          disabled={ this.props.disabled }
          onFocus={ this.props.onFocus }
          onChange={ this.props.onChange }
          onBlur={ this.handleBlur.bind(this) }
          onInput={ this.handleInput.bind(this) }></Input>
      </div>
    )
  }

  increase() {
    if (!this.props.disabled && !this.indisabled) {
      this.changeValue(this.props.value + this.step)
    }
  }

  decrease() {
    if (!this.props.disabled && !this.dedisabled) {
      this.changeValue(this.props.value - this.step)
    }
  }

  handleInput(value) {
    if (!this.props.disabled && !this.props['disabled-input']) {
      this.changeValue(value)
    }
  }

  handleBlur(event) {
    // console.log(this.props.min)
    if (this.props.min !== undefined && this.props.value < this.props.min) {
      this.changeValue(this.props.min) 
    }
    if (this.props.max !== undefined && this.props.value > this.props.max) {
      this.changeValue(this.props.min) 
    }
    this.props.onBlur && this.props.onBlur(event)
  }

  changeValue(value) {
    this.props.onChange && this.props.onChange(value)
  }

  get dedisabled() {
    return this.props.min !== undefined && this.props.value <= this.props.min
  }

  get indisabled() {
    return this.props.max !== undefined && this.props.value >= this.props.max
  }

  get step() {
    return this.props.step || 1
  }
}
