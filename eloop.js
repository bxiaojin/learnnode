const { rejects } = require("assert");
const { join } = require("path");

const TestEventLoop = () => {

    // 主任务队列
    const bar = () => console.log('bar')
    const baz = () => console.log('baz')
    const foo = () => {
        console.log('foo')
        bar()
        baz()
    }
    foo()

    // Message Queue 消息队列
    const bar2 = () => console.log('bar2');
    const baz2 = () => console.log('baz2');
    const foo2 = () => {
        console.log('foo2')
        setTimeout(() => {
            bar2();
        }, 0);
        baz2();
    };

    foo2();

    // Job Queue 任务队列
    const bar3 = () => console.log('bar3');
    const baz3 = () => console.log('baz3');
    const foo3 = () => {
        console.log('foo3');
        setTimeout(baz3, 0);
        new Promise((resolve, reject) => {
            resolve('should be right after baz, before bar');
        }).then(resolve => {
            console.log(resolve);
        }, reject => {
            console.log(reject);
        });
    };

    foo3();

    // 主任务队列 》 Jobs队列 》 Message 队列
    // 主任任务队列执行完成，为空时才会去执行Jobs队列，最后是Message队列

};

module.exports = TestEventLoop;
