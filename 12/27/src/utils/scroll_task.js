const default_options = {
  max_concurrent_process: 3,
  callback: _ => {}
}

export default class ScrollTask {
  constructor(options) {
    this.tasks = options.tasks

    this.options = { ...options }
  }

  cancel() {
    
  }

  run() {

  }

  delete() {

  }

  running() {

  }
}