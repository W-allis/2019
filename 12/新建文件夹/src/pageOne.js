import ThreadPool from "./fileposter/thread_pool"

// import FilePoster from './fileposter'

const btn = document.querySelector('.btn')

const file = document.querySelector('#chunk')

const count = document.querySelector('.count')

const number = document.querySelector('.number')
// const file_poster = new FilePoster({
//   callback: function(success, error, task) {
//     setTimeout(_ => {
//       Math.random() > 0.5 ? success(task) : error(task)
//     }, Math.random() * 1000)
//   }
// })

// btn.addEventListener('click', function() {
//   // console.log(file.files[0])
//   // console.log(chunks(file.files[0]))
//   file_poster.run(file.files[0])
//   setTimeout(_ => {
//     file_poster.suspend()
//   }, 3000)
//   setTimeout(_ => {
//     file_poster.continue()
//   }, 10000)
// })
const times = [...Array(100).keys()].map(item => Math.random() * 2000)

const jobs = [...Array(100).keys()].map((item, index) => (resolve, reject) => {
  setTimeout(_ => {
    Math.random() > 0.5 ? resolve() : reject()
  }, times[index])
})

const file_poster = new ThreadPool(
  jobs
)

let counts = []
let numbers = [] 

function do_job() {
  var all = 0

  for (var i = 0; i < times.length; i += 3) {
    all += +Math.max(times[i] || 0, times[i + 1] || 0, times[i + 2] || 0).toFixed(2)
  }

  return all 
}

// console.log(do_job())

const instance = file_poster.subscribe(res => {
  console.log('i am next')
}, error => {
  console.log('i am error')
}, _ => {
  console.log('i am complete')
})

btn.addEventListener('click', function() {
  // console.log(file.files[0])
  // console.log(chunks(file.files[0]))
  instance.open()
  
  var timer = setInterval(_ => {
    if (!instance._active.length) clearInterval(timer)
    counts.push(instance._active.length)
    
    count.innerHTML = counts.join(',')
  }, 1000)

  // var n = setInterval(_ => {
    // if (!instance._active.length) clearInterval(n)
    // numbers.push(instance._active.length)
    
    number.innerHTML = do_job()
  // }, 1000)
})