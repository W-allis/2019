import React, { Component } from 'react'

import './index.less'

export default class Input extends Component {

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
          className={'cr-input-inner'}
          type={ this.props.type } 
          placeholder={ this.props.placeholder }
          autoComplete={ this.props.autoComplete }
          autoFocus={ this.props.autoFocus }
          value={ this.props.value }
          disabled={ this.props.disabled } 
          readOnly={ this.props.readOnly }
          onChange={ this.handleOnChange.bind(this) }></input>
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
    console.log(this)
    this.props.onUpdateValue(event.target.value)
  }
}
