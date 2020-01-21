import React, { Component } from 'react'
import ETab from '../../components/tab'
import ETabPane from '../../components/tab/tab-pane'

export default class Tab extends Component {
  state = {
    elevator: 'goods',
    elevators: [
      { value: 'goods', label: '商品' },
      { value: 'comment', label: '评论' },
      { value: 'hot', label: '热销热销热销' },
      { value: 'cold', label: '冬季' },
      { value: 'spring', label: '春季' },
      { value: 'fall', label: '秋季', disabled: true }
    ]
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }

  handleTabClick(event) {
    // console.log(event)
  }

  handleTabChange(value) {
    this.setState({
      elevator: value
    })
  }
}
