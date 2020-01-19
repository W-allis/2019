import Task from './task'
import Observer from './observer'

export default class RollingTask {
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

    return new Observer({ tasks, ...options })
  }
}