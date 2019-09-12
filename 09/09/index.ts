interface Type_Sub {
	next(value: any): any | void
	error?(error: any): any | void
	complete?(): void
}

interface Destination {
	ObserverOrNext: (value: any) => any | void | Type_Sub
	error?(error: any): any | void
	complete?(): void
}

// enum Status = {  }

class Subscriber {
	constructor() { }
}

class Subject {
	
	private observable: any
	
	private destination: Type_Sub = {
		next: (value: any): void => { },
		complete: (): void => { },
		error: (error: any): void => {}
	}

	private _subscribe: string = 'pedding'
	
	constructor(observable: (params: any) => void) {
		this.observable = () => {
			
			// const observe = new Observer()
			
			observable(this)
		}
	}
	
	next(value: any) {
		if (this._subscribe !== 'pedding') return
		try {
			this.destination.next(value)
		} catch (error) {
			this.error(error)
		}
	}
	
	complete() {
		if (this._subscribe !== 'pedding') return
		try {
			this.destination.complete && this.destination.complete()
		} catch (error) {
			this.error(error)
		}

	}
	
	error(error: any) {
		if (this._subscribe !== 'pedding') return
		try {
			this.destination.error && this.destination.error(error) 
		} catch (error) {
			throw error
		} 

		this.unsubscribe()
	}

	private unsubscribe() {
		this._subscribe = 'errorOrComplete'
	}
	
	subscribe(ObserverOrNext: (params: any) => any | void | Type_Sub, error?: (error: any) => any | void, complete?: () => void) {
		
		if (typeof ObserverOrNext === 'function') {
			
			this.destination = { next: ObserverOrNext, error, complete }
		}
		
		if (typeof ObserverOrNext === 'object') {

			this.destination = { next: (<Type_Sub>ObserverOrNext).next, error: (<Type_Sub>ObserverOrNext).error, complete: (<Type_Sub>ObserverOrNext).complete }
		}
		
		this.observable()
		
	}
}

var instance = new Subject(observe => {
	observe.next(1)
	observe.next(2)

	// observe.unsubscribe()

	setTimeout(function() {
		observe.next(3)
	}, 3000)
})

instance.subscribe(res => {
	console.log(res)
}, error => {
	console.error(error)
})

instance.subscribe(res => {
	console.log(res)
})
