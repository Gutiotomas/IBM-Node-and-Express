//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

let myPromise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Promise 2 resolved")
        },3000)})
//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
//Call the promise and wait for it to be resolved and then print a message.
    myPromise2.then((successMessage) => {
        console.log("From Callback " + successMessage)
     })
})