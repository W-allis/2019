
import { chunks } from '../utils/index'

const default_options = {
  max_concurrent_process: 3,
  size: 2048,
  callback: (success_cb, error_cb) => { success_cb() } 
}

export default class FilePoster {
  
  // status = 'pendding'

  constructor(options) {
    
    // this.file = file
    this.initical(options)
  }

  initical(options) {
    
    this.configure = { ...default_options, ...options }
    this.status = 'init'
  }

  get remain() {
    return this.tasks.filter(task => task.status === 'pedding')
  }

  get done() {
    return this.tasks.filter(task => task.status !== 'pedding' && task.status !== 'running')
  }

  get active() {
    return this.tasks.filter(task => task.status === 'running')
  }

  // 总开关
  run(file) {
    if (this.status === 'init') {
    
      if (file instanceof File) new Error('file must be a File')
      
      this.tasks = chunks(file).map((chunk, index) => ({ id: `${file.name}_${index}`, chunk, finish: false, status: 'pedding' }))
      
      this.status = 'pedding'
      this.process = 0
      this.remain.slice(0, this.configure.max_concurrent_process).map(task => this.targetRequest(task))
    }
  }

  targetRequest(task) {
    if (this.status === 'pedding') {
      task.status = 'running'
      this.configure.callback(this.success.bind(this), this.error.bind(this), task)
    }
  }

  continue() {
    if (this.status === 'suspend') {
      this.status = 'pedding'
      this.remain.slice(0, this.configure.max_concurrent_process).map(task => this.targetRequest(task))
    }
  }

  error(task) {
    task.finish = true
    task.status = 'error'

    this.complete()
  }

  cancelRequest() {

  }

  suspend() {
    this.status = 'suspend'
  }

  success(task) {
    task.finish = true
    task.status = 'success'

    this.complete()
  }

  complete() {
    this.process = Math.ceil(this.done.length / this.tasks.length) * 100

    const empty = this.configure.max_concurrent_process - (this.active.length || 0)
    if (this.remain.length > 0 && empty > 0) {
      this.remain.slice(0, empty).map(task => this.targetRequest(task))
    }
  }
}