// https://juejin.im/entry/5b3c8d9de51d45195e0f225c
function fetchName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lujs')
        }, 3000)
    })
}

function fetchAvatar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('https://avatars3.githubusercontent.com/u/16317354?s=88&v=4')
        }, 4000)
    })
}

 async function fetchUser() {
    const name = await fetchName()
    const avatar = await fetchAvatar()
    return {
        name,
        avatar
    }
};

(async function () {
    console.time('should be 7s ')
    const user = await fetchUser()
    console.log(user)
    console.timeEnd('should be 3s ')
})()