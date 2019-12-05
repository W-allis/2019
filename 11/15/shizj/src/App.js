import React, { Component } from 'react'
import './styles/index.less'
// eslint-disable-next-line
import EButton from './components/button'
import EInput from './components/input'

// import { Button } from 'antd'

export default class App extends Component {
  state = {
    flag: true,
    list: [0],
    foo: '测试'
  }
  
  render() {
    return (
      <div>
        <h1 className={ this.state.flag ? 'red' : 'green' } onClick={ this.changeStatus.bind(this) }>当flag是true的时候，我应该是{ this.flag }红色</h1>
        <EButton type="primary" disabled={true} onClick={ this.modelBind.bind(this) }>click</EButton>

        {/* <input value={ this.state.foo } onChange={ this.doubleBind.bind(this) }></input> */}

        {/* <Button type="primary">link</Button> */}

        <EInput value={ this.state.foo } onUpdateValue={ this.handleUpdateValue.bind(this) }></EInput>

        <p>{ this.state.foo }</p>
      </div>
    )
  }

  handleConsole() {
    console.log(this.state)
  }

  changeStatus() {
    // this.setState(state => ({
    //   flag: !this.state.flag
    // }))
    this.setState({
      flag: !this.state.flag
    }, _ => {
      console.log(this.state)
    })

    console.log(this.state)
  }

  handleUpdateValue(value) {
    this.setState({
      foo: value
    })
  }

  modelBind() {
    this.handleConsole()
  }

  doubleBind(event) {
    this.setState({
      foo: event.target.value
    })
  }
}