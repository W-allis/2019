import { Component as _Component } from 'react'
import PropTypes from 'prop-types'

export default class Component extends _Component {
  className(init, expands = { }) {
    const { className } = this.props

    const classList = Object.entries(expands)
    // todo 
    return `${init || ''} ${className || ''} ${classList.length ? classList.filter(item => item[1]).map(item => item[0]).join(' ') : ''}`
  }

  style(arg) {
    const { style } = this.props
    return { ...arg, ...style } 
  }
}

Component.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}