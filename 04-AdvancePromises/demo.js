// ---------------------------------- REPASO ---------------------------

// const pA = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('Se resolvio A')
//     //  reject('Se rechazo A')
//     }, 1000)
// })


// si se resuelve la promesa
// console.log('1: ', pA)

// pA.then(data => {
//     console.log('2: ', data)
// }, err => {console.log('3: ', err)})
// // .then(null, data => {console.log('3: ', data)})

////////////////////////////////////////// WORKFLOW  ////////////////////////////////////////////////

const pA = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Se resolvio A')
    //    reject('Se rechazo A')
    }, 1000)
})


// const pB = pA.then();

// console.log('1: ', pB);

// pB.then(data => {
//     console.log('2: ', data)
// })


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

pA
.then() // pB --> revolve(se resolvio A)
.then() // pC --> revolve(se resolvio A)
.then() // pD --> revolve(se resolvio A)
.then(data => { console.log('Y esto? ', data)})

