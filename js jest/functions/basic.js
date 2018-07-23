
module.exports = {
    add : (n, n2) => n + n2,
    checkObject: () => (
        {name: 'test'}
    ),
    asyncTest: () => {
        return new Promise( (resolve, rejected) => {
            setTimeout(() => {
                resolve(2);
            }, 1000)
        });
    }
}