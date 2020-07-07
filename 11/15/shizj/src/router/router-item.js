import React, { Component } from 'react'
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'

export default class ERouterItem extends Component {

  render() {
    const children = this.props.children || []
    const path = this.props.path
    return (
      <div>
        {/* <Link to={ path }>{ path }</Link> */}
        <Route path={ path } component={ this.props.component }>
          { children.length && children.map((child, index) => {
            return (
              <ERouterItem key={ index } path={ child.path } component={ child.component } children={ child.children }></ERouterItem>
            )
          }) }
        </Route>
      </div>
    )
  }
}
