const EventEmitter = require('events')

const HandelEmitter = {
    eventEmitter: new EventEmitter(),
    doEmitter: (emitter) => {
        emitter.emit('start');
    }
};

module.exports = HandelEmitter;