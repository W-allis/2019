import React, { Component } from 'react'

import { stop } from '../../decorate/events'

import './index.less'

export default class Input extends Component {
  componentDidMount() {
    // console.log(this.handleOnClick)
  }

  render() {
    return (
      <div 
        className={`
          cr-input 
          cr-input__${ this.props.size || 'medium' }
          ${ this.props.icon ? 'cr-input-suffix' : '' }
          ${ this.props.disabled ? 'is-disabled' : '' }
          `}>
        <input
          ref="input"
          className={'cr-input-inner'}
          type={ this.props.type } 
          placeholder={ this.props.placeholder }
          autoComplete={ this.props.autoComplete }
          autoFocus={ this.props.autoFocus }
          value={ this.props.value }
          disabled={ this.props.disabled } 
          readOnly={ this.props.readOnly }
          onFocus={ this.handleOnFocus.bind(this) }
          onBlur={ this.handleOnBlur.bind(this) }
          onInput={ this.handleOnInput.bind(this) }
          onChange={ this.handleOnChange.bind(this) }
          onClick={ this.handleOnClick.bind(this) }></input>
        {
          this.props.icon &&
          (
            <span className={`
              cr-input__suffix 
              `}>
              <i className={`
                ${ this.props.icon || '' }
                `}></i>
            </span>
          )
        }
      </div>
    )
  }

  @stop
  handleOnChange(event) {
    this.props.onChange && this.props.onChange(event.target.value, event)
  }

  @stop
  handleOnClick(event) {
    this.props.onClick && this.props.onClick(event)
  }

  @stop
  handleOnInput(event) {
    this.props.onInput && this.props.onInput(event.target.value)
  }

  @stop
  handleOnBlur(event) {
    this.props.onBlur && this.props.onBlur(event)
  }

  @stop
  handleOnFocus(event) {
    this.props.onFocus && this.props.onFocus(event)
  }

  @stop
  focus(event) {
    this.refs.input.focus()
    this.props.focus && this.props.focus(event)
  }

  @stop
  blur(event) {
    this.refs.input.blur()
    this.props.blur && this.props.blur(event)
  }

  @stop
  select() {
    
  }
}
