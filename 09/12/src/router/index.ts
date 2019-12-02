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
  const result: Array<any> = []

  for (let item of router) {
    const reg = new RegExp(router.path)
  }

  return true
}

abstract class Router_d {
  abstract beforeEach(callback: (to, from, next) => void): void
}

class R_outer implements Router_d {
  beforeEach(): void {

  }
}