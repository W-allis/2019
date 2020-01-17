

export default class SafeObserver {
  constructor(instance) {
    this.destination = { }
    this._subscriber = instance
  }

  subscribe(nextOrObserver, error, complete) {
    if (typeof nextOrObserver === 'object') {
      this.destination.next = nextOrObserver.next || (_ => _)
      this.destination.error = nextOrObserver.error || (_ => {})
      this.destination.complete = nextOrObserver.complete || (_ => {})
    } else {
      this.destination.next = nextOrObserver
      this.destination.error = error
      this.destination.complete = complete
    }
    this._subscriber.destination = this.destination
    return this._subscriber
  }
}