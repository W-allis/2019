import React, { Component } from 'react'
import './styles/index.less'
// eslint-disable-next-line
import EButton from './components/button'
import EInput from './components/input'
import ESelect from './components/select'
import ESelectItem from './components/select/item'
import Elevator from './components/elevator'
import ETab from './components/tab'
import ETabPane from './components/tab/tab-pane'
import EInputNumber from './components/input-number'
// import { Button } from 'antd'
import ETooltip from './components/tooltip'
import EAlert from './components/alert'
import ETest from './components/test'

export default class App extends Component {
  state = {
    flag: true,
    foo: '测试',
    loading: false,
    inputnumber: 0,
    elevator: 'goods',
    elevators: [
      { value: 'goods', label: '商品' },
      { value: 'comment', label: '评论' },
      { value: 'hot', label: '热销热销热销' },
      { value: 'cold', label: '冬季' },
      { value: 'spring', label: '春季' },
      { value: 'fall', label: '秋季', disabled: true }
    ],
    list: [
      { value: 'name', label: '名称' },
      { value: 'age', label: '年龄' },
      { value: 'blood', label: '血型', disabled: true },
      { value: 'age', label: '年龄年龄年龄' },
      { value: 'age', label: '年龄年龄' },
      { value: 'age', label: '年龄年龄年龄年龄' },
      { value: 'age', label: '年年龄龄' },
      { value: 'age', label: '年年龄年龄龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' },
      { value: 'age', label: '年龄' }
    ]
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div onClick={ this.handleParentClick.bind(this) }>
        <h1 className={ this.state.flag ? 'red' : 'green' } onClick={ this.changeStatus.bind(this) }>当flag是true的时候，我应该是{ this.flag }红色</h1>
        button:
        <EButton type="primary" c-loading={ this.state.loading } onClick={ this.modelBind.bind(this) }>click</EButton>
        <br></br>  
        input: 
        <EInput value={ this.state.foo } c-model={ this.state.foo } onChange={ this.handleUpdateValue.bind(this) }></EInput>
        <EInput disabled={ true } icon="loading" value={ this.state.foo } c-model={ this.state.foo } onChange={ this.handleUpdateValue.bind(this) }></EInput>
        <br></br>
        select: 
        <ESelect ref="select" value={ this.state.foo } multiple={ true } onChange={ this.handleSelectChange.bind(this) }>
          {
            this.state.list.map((item, index) => <ESelectItem key={ index } value={ item.value } label={ item.label } disabled={ item.disabled }></ESelectItem>)
          }
        </ESelect>

        elevator:
        <Elevator>
          
        </Elevator>    
        <p>{ this.state.foo }</p>

        <ETab 
          style={`height: 400px;`}
          mode={ 'auto' } 
          border={ true } 
          tab-position={ 'top' } 
          value={ this.state.elevator } 
          onChange={ this.handleTabChange.bind(this) } 
          onTabClick={ this.handleTabClick.bind(this) }>
          {
            this.state.elevators.map((item, index) => 
              (<ETabPane 
                key={ index } 
                label={ item.label }
                disabled={ item.disabled } 
                name={ item.value }>
                  { item.label }
              </ETabPane>))
          }
        </ETab>
        <EInputNumber min={ 0 } disabled={ false } step={ 5 } value={ this.state.inputnumber } onChange={ this.handleInputNumberChange.bind(this) }>

        </EInputNumber>

        <ETooltip></ETooltip>

        <EAlert>fasfs</EAlert>

        <ETest age="12"></ETest>
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
    // this.setState({
    //   flag: !this.state.flag
    // }, _ => {
    //   console.log(this.state)
    // })

    // console.log(this.state)
    this.refs.select.focus()
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

  handleSelectChange(value) {
    this.setState({
      foo: value 
    })
  }

  handleParentClick() {
    console.log(1234)
  }

  handleTabClick(event) {
    // console.log(event)
  }

  handleTabChange(value) {
    this.setState({
      elevator: value
    })
  }

  handleInputNumberChange(value) {
    console.log(value)
    this.setState({
      inputnumber: value
    })
  }
}