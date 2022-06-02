const os = require('os')


//user info
const user = os.userInfo()
console.log(user)


//system up time
console.log(`The system up time is ${os.uptime} seconds`)


const currentsOs = {
  name: os.type(),
  release: os.release(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),

}

console.log(currentsOs)