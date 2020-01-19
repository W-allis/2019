import { createStore } from 'redux'

export default createStore(function(state = 0, props) {
  if (props.type === 'add') {
    return state + 1
  }

  if (props.type === 'reduce') {
    return state - 1
  }

  return state
})