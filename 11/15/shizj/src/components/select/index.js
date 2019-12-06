import React, { Component } from 'react'
import EInput from '../input'
import EDropdown from '../dropdown'

import { stop } from '../../decorate/events'

import './index.less'

export default class Select extends Component {
  state = {
    active: false
  }

  constructor(props) {
    super(props)
    console.log(this)
  }

  render() {
    return (
      <div className={`
        cr-select
        ${ this.state.active ? 'is-active' : '' }
      `}
      onClick={ this.handleDropDown.bind(this) }>
        <EInput 
          value={ this.props.value } 
          readOnly={ true } 
          icon={`fa fa-angle-down`}></EInput>
        <div className={`cr-select-dropdown`}>
          <EDropdown active={ this.state.active }>
            { this.props.children }
          </EDropdown>
        </div>
      </div>
    )
  }

  @stop(true)
  handleDropDown() {
    this.setState({
      active: true
    })
  }
}