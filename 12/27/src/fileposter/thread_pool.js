import Task from './task'
import SafeObserver from './observer'

const default_options = {
  // 最大进程数
  max_concurrent_process: 3,
  // 当线程池打开时是否自动执行任务
  auto_job: true
}
// 每个job执行完毕回调，进程池完成complete回调
export default class ThreadPool {
  
  constructor(options) {
    // 配置参数
    this._config = { ...default_options, ...options }
    // 注册任务
    this._tasks = this._config.tasks
  }

  static fromPromise(jobs, options = { }) {

    const tasks = jobs.map(job => {
      return (
        new Task(
          function (resolve, reject) {
            job()
            .then(value => {
              resolve()
              return value
            })
            .catch(error => {
              reject()
            })
          }
        )
      )
    })

    return new ThreadPool({ tasks, ...options })
  }

  static fromCallback() {
    const tasks = jobs.map(job => {
      return (
        new Task(
          function (resolve, reject) {
            job(resolve, reject)
          }
        )
      )
    })

    return new ThreadPool({ tasks, ...options })
  }

  get _remain() {
    return this._tasks.filter(task => !task.finish && task.status === 'init')  
  }

  get _active() {
    return this._tasks.filter(task => !task.finish && task.status === 'pedding')
  }

  get _be_run_jobs() {
    const temp = this._config.max_concurrent_process - this._active.length
    return this._remain.slice(0, temp)
  }

  // 打开进程
  open() {
    this._status = 'open'
    if (this._config.auto_job) {
      this._be_run_jobs.forEach(job => this._running_job(job))
    }
  }

  _running_job(job) {
    job.then((instance) => {
      this.destination.next(instance)
    }).catch(() => {
      this.destination.error()
    }).finally(() => {
      this._be_run_jobs.forEach(job => this._running_job(job))
    })
    job.run()
  }

  start() {
    if (this._status === 'open' || this._status === 'suspend') {
      this._status = 'pedding'
    }
  }

  // 暂停的时候，结束当前进行中的进程
  suspend() {
    this._status = 'suspend'
    this._active.map(job => job.cancel())
  }

  close() {
    this._status = 'close'
  }
}