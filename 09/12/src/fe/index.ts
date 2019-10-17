export default new class Fe {
  _events: Function[] = []
  _providers: Map<string, any> = new Map()
}

export class Fe {
  
  events: Function[] = []

  providers: Map<any, any> = new Map()

  constructor() {}
}
