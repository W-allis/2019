
import React, { Component } from 'react'
import ESelect from '../../components/select'
import ESelectItem from '../../components/select/item'

export default class P401 extends Component {
  state = {
    foo: '',
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

  render() {
    return (
      <div>
        <ESelect ref="select" value={ this.state.foo } multiple={ true } onChange={ this.handleSelectChange.bind(this) }>
          {
            this.state.list.map((item, index) => <ESelectItem key={ index } value={ item.value } label={ item.label } disabled={ item.disabled }></ESelectItem>)
          }
        </ESelect>
      </div>
    )
  }

  handleSelectChange(value) {
    this.setState({
      foo: value 
    })
  }
}
