import React, { Component } from 'react'

import TabItem from './tab-item'
// import { unit } from '../../utils/store'

import './index.less'

export default class Tab extends Component {

  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div
      className={`
        cr-tab 
        cr-tab__${ this.props.mode || 'fill' }
        cr-tab__${ this.props.direction || 'horizontal' }
      `}>
        <div
        className={`
          cr-tab__headers
        `}>
          {
            this.tabItems.map((tabItem, tabIndex) => 
              <TabItem 
                key={ tabIndex } 
                { ...tabItem.props } 
                tabIndex={ tabIndex } 
                isActive={ tabItem.props.name === this.props.value }
                onTabClick={ this.handleTabClick.bind(this) }
                onClick={ this.handleHeaderItemClick.bind(this) }>
              </TabItem>)
          }
        </div>
        <div
        className={`
          cr-tab__content
        `}>
          { this.tabItems.filter(tabItem => tabItem.props.name === this.props.value) }
        </div>
      </div>
    )
  }

  handleHeaderItemClick(value) {
    this.props.onChange && this.props.onChange(value)
  }
  handleTabClick(event, tabItem) {
    this.props.onTabClick && this.props.onTabClick(event, tabItem)
  }
  // get width() {
  //   // eslint-disable-next-line
  //   return +this.props.width == this.props.width ? this.props.width + 'px' : this.props.width
  // }
  get tabItems() {
    return this.props.children
  }
}
