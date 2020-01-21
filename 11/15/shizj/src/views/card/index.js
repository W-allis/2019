import React from 'react'
import { Provider } from 'react-redux'

import ECard from './components/card'

import store from './store/card'

import './less.less'

export default class Footer extends Component {

  render() {
    return (
      <Provider store={ store }>
        <ECard></ECard>
      </Provider>
    )
  }
}
