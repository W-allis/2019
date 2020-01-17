import React, { useReducer } from 'react'

import EButton from '../components/button'

const initical = { count: 1 }

export default function UseReducerComp() {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer((state, action) => {
    console.log(state, action)
    switch (action.type) {
      case 'reset':
        return initical
      case 'add':
        return { count: state.count + 1 }
      case 'reduce':
        return { count: state.count - 1 }
      default:
        return { count: state.count - 1 }
    }
  }, initical)
  console.log(state)
  return (
    <div>
      <h1>{ state.count }</h1>
      <EButton type="primary" onClick={ _ => dispatch({ type: 'reset' }) }>reset</EButton>
      <EButton type="primary" onClick={ _ => dispatch({ type: 'add' }) }>add</EButton>
      <EButton type="primary" onClick={ _ => dispatch({ type: 'reduce' }) }>reduce</EButton>
    </div>
  )
}
