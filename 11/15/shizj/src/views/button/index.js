import React, { Component } from 'react'
import EButton from '../../component/button'

export default class Button extends Component {
  state = {
    laoding: false
  }

  render() {
    return (
      <EButton type="primary" c-loading={ this.state.loading } onClick={ this.modelBind.bind(this) }>click</EButton>
    )
  }

  modelBind() {
    // this.handleConsole()
  }
}
