import React, { Component } from 'react'

import Input from '../input'

export default class InputNumber extends Component {
  render() {
    return (
      <div
      className={`
        cr-input-number
      `}>
        
        <Input 
          ref="input"
          value={ this.props.value } 
          readOnly={ true } 
          placeholder={ this.props.placeholder }
          autoComplete={ this.props.autoComplete }
          autoFocus={ this.props.autoFocus }
          disabled={ this.props.disabled }
          focus={ this.props.focus }
          blur={ this.props.blur }></Input>
      </div>
    )
  }
}
