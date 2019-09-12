function log(target: any) {
  console.log(target)
  return target
}
@log
class Car {
  run() {
    console.log('Car is running')
  }
}

const c1 = new Car()
c1.run()