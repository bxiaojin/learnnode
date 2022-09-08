const http = require('http')
// [1]
const uos = require('./uos')
// [2]
const item = require('./email')
const { Mail } = item
// [3]
const { Title } = require('./title')
const HandleError = require('./handel')
const AsynHandel = require('./promis')
const FlowControl = require('./flow')
const TestEventLoop = require('./eloop')
const TestNextTick = require('./ntick')
const HandelEmitter = require('./emitter')
const HandelFiles = require('./file')


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

    console.log(uos.name);
    console.log(Mail.email);
    console.log(Title.title);
    console.log(`Server running at http://${hostname}:${port}`);

    HandelFiles();

    // HandleError();
    // AsynHandel(true)
    // FlowControl();
    // TestEventLoop();
    // TestNextTick();
    // HandelEmitter.eventEmitter.on('start', () => {
    //     console.log('emit start ...')
    // });
    // HandelEmitter.doEmitter(HandelEmitter.eventEmitter);
})