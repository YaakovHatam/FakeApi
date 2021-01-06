
function Hello() {
    return 1;
}

function HelloAsync(cb) {
    setTimeout(() => cb(2), 1000);
}

HelloAsync(function(res) { console.log(res)}); // 2
Hello(); // 1

// console -> 1, 2


/* the PROMISE way */
async function HelloPromise() {
    return 1;
}

function HelloAsyncPromise() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(2), 1000);
    })
}

HelloAsyncPromise().then(res => console.log(res));
HelloPromise().then(res => console.log(res));
// console -> 1, 2

// await
async function main() {
    // HelloAsyncPromise().then(res => console.log(res));
    const res = await HelloAsyncPromise();
    console.log(res);
    
    HelloPromise().then(res => console.log(res));
}