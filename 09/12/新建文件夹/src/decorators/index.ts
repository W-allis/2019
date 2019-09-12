declare interface ComponentOption {
  template: string,
  styles?: Array<string>
}

// html引入问题
// providers供应商问题
export function Component(options: ComponentOption) {

  return function(target: any) {
    console.dir(target)
    return target
  }
}