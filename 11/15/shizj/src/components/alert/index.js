import { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Alert extends Component {
  render() {
    const parent = this.props.appendToBody ? document.body : document.createElement('div')
    
    return ReactDOM.createPortal(this.props.children, parent)
  }
}
