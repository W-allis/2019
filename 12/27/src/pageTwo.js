console.log(process.env.weinre)

if (process.env.weinre) {
  const script = document.createElement('script')

  script.src = `http://localhost:${process.env.weinrePort}/target/target-script-min.js`
  
  document.body.appendChild(script)
}
