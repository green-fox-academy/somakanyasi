'use tsrict';

let myPromise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!'),
    reject('REJECTED!')
  }, 300)
})

const onReject = (err) => {
  console.log(err.message)
}

myPromise.then(fulfilled, onReject())
