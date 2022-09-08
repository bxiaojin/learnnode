const fs = require('fs');
const afs = require('fs/promises')

const HandelFiles = () => {
    // 异步文件操作
    fs.open('./app.js', 'r', (err, fd) => {
        // fd is our file descriptor
        console.log(`file is open ${fd} `)
        fs.close(fd);
    });

    // 同步文件操作
    try {
        const fd = fs.openSync('./app.js', 'r');
        fs.close(fd);
    }
    catch (err) {
        console.error(err);
    }

    // fsPromise用法
    async function example() {
        let filehandle;
        try {
            filehandle = await afs.open('./app.js', 'r');
            console.log(filehandle.fd);
            // console.log(await filehandle.readFile({ encoding: 'utf-8' }));
        }
        finally {
            await filehandle.close();
        }
    };
    example();

};

module.exports = HandelFiles;