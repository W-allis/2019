export function readonly() {
  return (target, key, desc) => {
    desc.writable = false
    return desc
  }
} 
