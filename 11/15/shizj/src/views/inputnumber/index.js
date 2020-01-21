import React, { Component } from 'react'

import EInputNumber from '../../components/inputnumber'

export default class InputNumber extends Component {
  state = {
    inputnumber: 0
  }

  render() {
    return (
      <EInputNumber min={ 0 } disabled={ false } step={ 5 } value={ this.state.inputnumber } onChange={ this.handleInputNumberChange.bind(this) }></EInputNumber>
    )
  }

  handleInputNumberChange(value) {
    console.log(value)
    this.setState({
      inputnumber: value
    })
  }
}

