export function completionUnit(value = '') {
  if (!value || typeof value !== 'string') return value

  const units = ['%', 'px', 'vmin', 'vh', 'vw', 'em', 'ex', 'cm', 'mm', 'in', 'pt', 'pc', 'rem', 'ch', 'vmax']

  const unitReg = new RegExp(`^.*(${units.join('|')})$`)
  
  return unitReg.test(value) ? value : value + 'px'
}