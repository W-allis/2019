import AppComponent from '../home/app.component'

export default function Router(options?) {
  return (target) => {
    window.onpopstate = handleOnpopstate()
  }
}

const cache = true

function handleOnpopstate() {
  var cache: Set<any> = new Set()

  return _ => {
    console.log(1234)
    if (!cache || cache.has(AppComponent)) {
      const providers = Reflect.getMetadata('design:paramtypes', AppComponent)

      const instance = Reflect.construct(AppComponent, [])

      instance.ngOnInit && instance.ngOnInit()

      cache.add(AppComponent)
    }
  }
}

function match(url, router) {

  return true
}