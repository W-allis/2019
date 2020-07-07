import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import routes from './config'

class ERouter extends Component {

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

class ERouterItem extends Component {

  render() {
    const {
      path,
      component,
      children
    } = this.props

    return (
      <Route
        path={path}
        component={component}
        children={children.map(({ path, component, children = [] }, index) => 
          <ERouterItem
            key={index}
            path={path}
            component={component}
            children={children}>
          </ERouterItem>)}>
      </Route>
    )
  }
}

export default class RouterComp extends Component {

  render() {
    const {
      routes
    } = this.props

    return (
      <ERouter>
        {
          routes.map(({ path, component, children = [] }, index) => 
            <ERouterItem
              key={index}
              path={path}
              component={component}
              children={children}>
            </ERouterItem>)
        }
      </ERouter>
    )
  }
}
