'use tsrict';

let myPromise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
});

const onReject = (err) => {
  console.log(err.message)
}

myPromise.then(() => {}, onReject)
