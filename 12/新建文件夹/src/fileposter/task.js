
// todo 生成taskid，建议使用hash算法
export default class Task {
  
  constructor(job) {
    this._instance = this

    if (job instanceof Function) new Error('job must be function')

    this.status = 'init'

    this._success_callbacks = []
    this._error_callbacks = []
    this._complete_callbacks = []

    this._task = function() {
      // this指向问题
      job(this.resolve, this.reject)
    }

    this.reject = this.reject.bind(this)
    this.resolve = this.resolve.bind(this)
  }

  run() {
    this.finish = false
    this.status = 'pedding'

    this._task()
  }

  cancel() {
    if (this.status === 'pedding') {
      this.status = 'init'
    }
  }

  then(callback) {
    if (callback instanceof Function) new Error('callback must be a function')

    this._success_callbacks.push(callback)

    return this
  }

  catch(callback) {
    if (callback instanceof Function) new Error('callback must be a function')

    this._error_callbacks.push(callback)
    return this
  }

  finally(callback) {
    if (callback instanceof Function) new Error('callback must be a function')

    this._complete_callbacks.push(callback)
    return this
  }

  resolve() {
    this.finish = true
    this.status = 'error'
    // this指向问题
    this._success_callbacks.forEach(callback => callback(this))

    this._complete_callbacks.forEach(callback => callback(this))
  }

  reject() {
    
    this.finish = true
    this.status = 'success'

    this._error_callbacks.forEach(callback => callback(this))

    this._complete_callbacks.forEach(callback => callback(this))
  }
}