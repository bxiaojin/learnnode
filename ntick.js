const TestNextTick = () => {
    let i = 0;
    // nextTick 实现不阻塞的死循环
    function compute() {
        i += 1;
        console.log(`tick-${i} is doing. `)
        process.nextTick(compute);
    }
    // compute();
}

module.exports = TestNextTick;