import { Component } from 'react'

// must be register with class
// Component
// console.log(Component)
Component.prototype.on = function(eventName, target) {
//   console.log(this)
  this[`$_${eventName}`] = function (props) {
    target(...props)
  }
}

Component.prototype.emit = function(eventName, ...props) {
  const _key = `$_${eventName}`
  if (!this.hasOwnProperty(_key)) {
    throw new Error(`${eventName} not register`)
  } 
  this[_key](...props)
}

Component.prototype.dispatch = function (componentName, eventName, ...props) {
  let parent = this.props.parent || { }
  let parentName = parent.componentName

  while (parent && (!parentName || parentName !== componentName)) {
    parent = parent.props.parent
    
    if (parent) {
      componentName = parent.componentName
    }
  }

  if (parent) {
    parent[eventName].apply(parent, [...props])
  }
}

