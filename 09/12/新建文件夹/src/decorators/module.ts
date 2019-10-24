declare interface ModuleConfig {
  modules?: Object
  components?: Object 
  provides?: Array<Function>
}

export function Module(options: ModuleConfig) {
  return function(target) {
    return target
  }
}