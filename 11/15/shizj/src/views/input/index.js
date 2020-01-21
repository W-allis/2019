import React, { Component } from 'react'
import EInput from '../../components/input'

export default class Input extends Component {
  state = {
    foo: ''
  }

  render() {
    return (
      <div>
        <EInput value={ this.state.foo } c-model={ this.state.foo } onChange={ this.handleUpdateValue.bind(this) }></EInput>

        <EInput disabled={ true } icon="loading" value={ this.state.foo } c-model={ this.state.foo } onChange={ this.handleUpdateValue.bind(this) }></EInput>
      </div>
    )
  }

  handleUpdateValue(value) {
    this.$setState({
      foo: value
    })
  }
}
