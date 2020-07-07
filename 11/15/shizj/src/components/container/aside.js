import React from 'react'

// import { Component } from '../../libs'

import { completionUnit } from '../../utils/unit'

import './aside.less'

export default function Aside(props) {
  // console.log(props)
  const {
    style = { }
  } = props

  return (
    <aside
      className={`
        cr-aside
      `}
      style={
        {
          ...style,
          width: completionUnit(props.width)
        }
      }>
      { props.children }
    </aside>
  )
}
