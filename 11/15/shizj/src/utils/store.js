// export function unit(value, unit = 'px') {
//   const units = ['%', 'px', 'em', 'rem', 'pt', 'in', 'cm', 'mm', 'ex', 'pc']
//   let reg

//   while(reg = units.shift()) {
//     if (new RegExp(`${reg}$`).test(value)) {
//       unit = reg
//       break
//     }
//   }
//   console.log(value.match(new RegExp(`(.*)${reg}$`)))
//   // return (new RegExp(`(.*)${reg}$`))
// }