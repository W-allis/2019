// import './types/index.d'

// import './components'

console.log("Hello World from pageOne main file!")

function random(start: number, end: number): number {
  return Math.round(Math.random() * (end - start)) + start
}

// const arr: number[] = [...Array(10).keys()].map(_ => random(0, 100))
const arr: number[] = [98, 15, 79, 83, 78, 41, 38, 33, 88, 55, 56]

console.log(arr)

function fastSort(arr: number[]) {
  let between: number = arr[arr.length - 1], result: number[] = [between]
  if (arr.length === 0 || arr.length === 1) return arr

  const compare = <T>(between: T, sync: boolean = true): (item: T) => boolean => (item: T) => item <= between

  const leftOrRight = result.concat(fastSort(arr.filter(compare(between, true)))).unshift(...fastSort(arr.filter(compare(between))))
  return result 
}

console.log(fastSort(arr))