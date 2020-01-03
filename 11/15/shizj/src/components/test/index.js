import 'reflect-metadata'
import React, { Component } from 'react'

import { stop } from '../../decorate/events'

// eslint-disable-next-line
const withLiftCycle = (Comp, ...args) => {
  class NewComponent extends Component{
    #name = '我是高阶组件'

    componentDidMount() {

    }

    render() {
      return <Comp { ...this.props } name={ this.#name }></Comp>
    }

    getName() {
      return this.#name
    }
  } 
  return NewComponent 
}

@withLiftCycle
class HOC extends Component{
  render() {
    return (
      <div onClick={ this.handleOnClick.bind(this) }>{ this.props.name }:{ this.props.age }</div>
    )
  }

  @stop
  handleOnClick() {
    console.log(this)
  }
}
// console.log(Reflect.construct(HOC, []).handleOnClick)
export default HOC