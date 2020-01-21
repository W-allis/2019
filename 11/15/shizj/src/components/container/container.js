import React from 'react'
import { Component } from '../../libs'

import './container.less'

export default class Container extends Component {
  render() {
    const props = this.props
    
    return (
      <section className={this.className('cr-container', {
        'is-vertical': props.children.some(child => child.type && (child.type.componentName === 'cr-footer' || child.type.componentName === 'cr-header'))
      })}
      style={ this.style() }>
        { props.children }
      </section>
    )
  }
}
