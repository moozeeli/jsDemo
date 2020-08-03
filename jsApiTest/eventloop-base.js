

setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1');
        Promise.resolve().then(function() {
            console.log('promise11')
        })
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)