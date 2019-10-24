export default class Platform {
  constructor() {}

  static init(_module) {
    console.dir(_module)
    const app = new _module()
  }
}