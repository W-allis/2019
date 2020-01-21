import React from 'react'

import { Component } from '../../libs'

import { completionUnit } from '../../utils/unit'

import './aside.less'

export default function Aside(props) {
  return (
    <aside
      className={`
        cr-aside
      `}
      style={
        {
          width: completionUnit(props.width)
        }
      }>
      { props.children }
    </aside>
  )
}
