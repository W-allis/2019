export default class Fe {
  
  // static events: Function[] = []

  private Components: Set<any> = new Set()
  private providers: Map<any, any> = new Map()

  static instance: Fe

  // 单例模式，将所有module创建的组件，依赖注册到Fe实例
  constructor() {
    // if (Fe.instance) {
    //   return Fe.instance
    // }

    // Fe.instance = this
  }

  setComponent(component) {
    this.Components.add(component)
  }

  hasComponent(component): boolean {
    return this.Components.has(component)
  }

  removeComponent(component) {
    this.Components.delete(component)
  }
}
