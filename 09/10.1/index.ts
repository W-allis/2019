const random = (start: number, end: number): number => Math.round(Math.random() * (end - start)) + start

function quickSort(arr: number[]): number[] {
    const _index: number = random(0, arr.length - 1)
    let between: number = arr[_index], result: number[] = [between]

    if (arr.length === 0 || arr.length === 1) return arr

    const compare = <T>(between: T): (param: T) => boolean => (param: T): boolean => param <= between
   
    const moreOrLess = compare(between)
    
    result.push(...quickSort(arr.filter((item, index) => !moreOrLess(item) && index !== _index)))
    result.unshift(...quickSort(arr.filter((item, index) => moreOrLess(item) && index !== _index)))
    return result
}

// const arr = [...Array(11).keys()].map(item => random(0, 100))
const arr = [10, 37, 20, 10, 44, 48, 54, 31, 32, 94, 13]

console.log(quickSort(arr))
