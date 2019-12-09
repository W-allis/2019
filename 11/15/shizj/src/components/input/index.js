import React, { Component } from 'react'

import './index.less'

export default class Input extends Component {
  componentDidMount() {
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
          onFocus={ this.props.focus }
          onBlur={ this.props.blur }
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

  handleOnChange(event) {
    this.props.onUpdateValue && this.props.onUpdateValue(event.target.value)
  }
  handleOnClick(event) {
    this.props.onClick && this.props.onClick(event.target.value)
  }

  focus(event) {
    this.refs.input.focus()
    this.props.focus(event)
  }

  blur(event) {
    this.refs.input.blur()
    this.props.blur(event)
  }
}
