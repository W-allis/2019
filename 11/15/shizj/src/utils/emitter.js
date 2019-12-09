export default class Emitter {
  dispatch(component, event, ...props) {
    let parent = this.props.parent || { }
    let parentName = parent.componentName

    while (parent && (!parentName || parentName !== component)) {
      parent = parent.props.parent
      
      if (parent) {
        parentName = parent.componentName
      }
    }

    if (parent) {
      parent[event].apply(parent, [...props])
    }
  }

  on(event, target) {
    if (!this.event) {
      this[event] = target
    }
  }
}