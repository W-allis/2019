/** 类型转移到.d文件 */
declare interface ModuleConfig {
  modules?: Object
  components?: Array<any> 
  provides?: Array<Function>
}
import Fe from '../fe'

function factorys() {
  // return new 
}

export function Module(options: ModuleConfig) {
  const fe = new Fe()

  return function(target) {
    const { modules: imports, provides: providers, components } = options
    target.ngInjectDef = { imports, providers, factorys }

    components.forEach(component => fe.setComponent(component))
  }
}