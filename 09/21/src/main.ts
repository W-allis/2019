import 'mdui/dist/css/mdui.min.css'
import mdui from 'mdui'

import './style/index.css'

import { Message } from './utils/index'

import { result } from './api/visit'

// import { resultComponent } from './components'

console.log(result)

var $ = mdui.JQ

$('.vs-btn').on('click', function() {
  const params = validate()
  console.log(params)
  if (params) {
      console.log(123)
  }
  
//   Message({
//       message: '错误日志'
//   })
})

$('.idNumber').on('focus', function() {
//   const idNumber = $('.idNumber').val() && $('.idNumber').val().trim()
  $('.idItem').removeClass('error')  
})

function validate() {
  const idNumber = $('.idNumber').val() && $('.idNumber').val().trim()
  const mobile = $('.idNumber').val() && $('.mobile').val().trim()

  if (!idNumber) {
    $('.idItem').addClass('error')
    return 
  }

  return {
    idNumber,
    mobile
  }
}

// $('.vs-result').html(resultComponent({
  
// }))