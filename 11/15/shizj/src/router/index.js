import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export default class ERouter extends Component {

  render() {
    return (
      <div>
        <Router>
          { this.props.children }
        </Router>
      </div>
    )
  }
}
