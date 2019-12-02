import React, { Component } from 'react'

export default class input extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <input value={ this.props.value } onChange={ this.handleOnChange.bind(this) }></input>
      </div>
    )
  }

  handleOnChange(event) {
    console.log(this)
    this.props.onUpdateValue(event.target.value)
  }
}
