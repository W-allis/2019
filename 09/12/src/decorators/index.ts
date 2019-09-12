declare interface ComponentOption {
  template: string,
  styles?: Array<string>
}

//
export function Component(options: ComponentOption) {

  console.log(options)
  return function(target: any) {
    console.log(new target())
    return target
  }
}