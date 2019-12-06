import React, { Component } from 'react'
import './styles/index.less'
// eslint-disable-next-line
import EButton from './components/button'
import EInput from './components/input'
import ESelect from './components/select'
import ESelectItem from './components/select/item'

// import { Button } from 'antd'

export default class App extends Component {
  state = {
    flag: true,
    foo: '测试',
    loading: false,
    list: [
      { value: 'name', label: '名称' },
      { value: 'age', label: '年龄' },
      { value: 'blood', label: '血型', disabled: true }
    ]
  }
  
  render() {
    return (
      <div>
        <h1 className={ this.state.flag ? 'red' : 'green' } onClick={ this.changeStatus.bind(this) }>当flag是true的时候，我应该是{ this.flag }红色</h1>
        button:
        <EButton type="primary" c-loading={ this.state.loading } onClick={ this.modelBind.bind(this) }>click</EButton>
        <br></br>  
        input: 
        <EInput value={ this.state.foo } c-model={ this.state.foo } onUpdateValue={ this.handleUpdateValue.bind(this) }></EInput>
        <EInput disabled={ true } icon="loading" value={ this.state.foo } c-model={ this.state.foo } onUpdateValue={ this.handleUpdateValue.bind(this) }></EInput>
        <br></br>
        select: 
        <ESelect value={ this.state.foo } onChange={ this.modelBind.bind(this) }>
          {
            this.state.list.map((item, index) => <ESelectItem key={ index } value={ item.value } label={ item.label } disabled={ item.disabled }></ESelectItem>)
          }
        </ESelect>


        <p>{ this.state.foo }</p>
      </div>
    )
  }

  handleConsole() {
    console.log(this)
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