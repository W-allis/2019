import 'reflect-metadata'

declare interface ComponentOption {
  template: string,
  selector: string,
  styles?: Array<string>
}

// const paramsReg = /function\s*\w*\(([\s\S]*?)\)/

// html引入问题
// providers供应商问题
export function Component(options: ComponentOption) {

  return function(target: any) {
    // console.dir()

    // console.dir()

    return target
  }
}