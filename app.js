const http = require('http')
// [1]
const uos = require('./uos')
// [2]
const item = require('./email')
const { Mail } = item
// [3]
const { Title } = require('./title')
let HandleError = require('./handel')
let AsynHandel = require('./promis')


const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    process.on('uncaughtException', Err => {
        console.error('There Was An Uncaught Error', Err);
        process.exit(1);
    });

    // HandleError();
    AsynHandel(true)

    console.log(uos.name);
    console.log(Mail.email);
    console.log(Title.title);
    console.log(`Server running at http://${hostname}:${port}`);
})