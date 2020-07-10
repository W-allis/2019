import React, { Component } from 'react'
import './styles/index.less'
import './App.css'

import { login } from './api/login'

import routes from './store/routes'
// eslint-disable-next-line
import RouterComp from './router'
// import ERouterItem from './router/router-item'

import EContainer from './components/container/container'
import EHeader from './components/container/header'
import EMain from './components/container/main'
import EAside from './components/container/aside'
// import { Link } from 'react-router-dom'
// eslint-disable-next-line
// import EButton from './components/button'

// import Elevator from './components/elevator'

// import { Button } from 'antd'
// import ETooltip from './components/tooltip'
// import EAlert from './components/alert'
// import ETest from './components/test'

// import UseReducerComp from './views/useReducer'

export default class App extends Component {
  state = {
    flag: true,
    loading: false,
    inputnumber: 0,
  }

  componentDidMount() {
    login({
      username: 'wallis',
      password: '1435135'
    })
  }
  
  render() {

    return (
      <EContainer className="app-container">
        <EHeader height="80">
          <div className="app-header">
            header
          </div>
        </EHeader>
        {/* 注册路由 */}
        <EContainer>
          <EAside width="200px"
            style={
              {
                "background": "grey"
              }
            }
          >

          </EAside>
          <EMain className="app-main">
            <RouterComp routes={routes}>
            </RouterComp>
            {/* <Elevator>
            
              </Elevator>    
            
              <ETooltip></ETooltip> */}
            {/* <ETest age="12"></ETest> */}
          </EMain>
        </EContainer>
      </EContainer>
    )
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

  doubleBind(event) {
    this.setState({
      foo: event.target.value
    })
  }

  // handleParentClick() {
  //   console.log(1234)
  // }

  
}