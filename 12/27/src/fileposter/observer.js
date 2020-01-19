

export default class Observer {
  constructor() {
  }

  _safeObserver(nextOrObserver, error, complete) {
    this.destination = { }

    if (typeof nextOrObserver === 'object') {
      this.destination.next = nextOrObserver.next || (_ => _)
      this.destination.error = nextOrObserver.error || (_ => {})
      this.destination.complete = nextOrObserver.complete || (_ => {})
    } else {
      this.destination.next = nextOrObserver
      this.destination.error = error
      this.destination.complete = complete
    }
  }

  subscribe(nextOrObserver, error, complete) {
    this.destination = this._safeObserver(nextOrObserver, error, complete)
    
    // return new 
  }
}