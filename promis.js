const AsynHandel = (statu = true) => {
    let prms = new Promise(function (resolve, reject) {
        console.log('promise pending...');
        if (statu == true) {
            resolve('success.')
            console.log('promise resolved...');
        }
        else {
            reject('error.')
            console.log('promise reject...');
        }
    })
    prms.then(function (value) {
        console.log('promise resolved');
    }, function (value) {
        console.log('promise rejected');
    });


    new Promise(function (resolve, reject) {
        //resolve('* success.')
        reject('* error.')
    }).then(resolve => {
        console.log(resolve);
    }, reject => {
        console.log(reject);
    });
};

module.exports = AsynHandel;

