const FlowControl = () => {
    function final(input, callback) {
        callback(`${input} and terminated by executing callback `)
    }
    function middleware(input, callback) {
        return final(`${input} touched by middleware `, callback)
    }
    function initiate() {
        const input = 'hello this is a function ';
        middleware(input, function (result) {
            console.log(result);
        });
    }

    initiate();

    function getSong() {
        let _song = '';
        let i = 5;
        for (i; i > 0; i -= 1) {
            _song += `${i} beers on the wall, you take one down , ${i - 1} bottles on the wall\n`;
            if (i === 1) {
                _song += "Hey let's get some more beer";
            }
        }
        return _song;
    }

    function getSong2() {
        let _song = '';
        let i = 5;
        for (i; i > 0; i--) {
            setTimeout(function () {
                _song += `${i} beers on the wall, you take one down , ${i - 1} bottles on the wall\n`;
                if (i === 1) {
                    _song += "Hey let's get some more beer";
                }
            }, 0);
        }
        return _song;
    }

    function singSong(_song) {
        if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
        console.log(_song);
    }

    const song = getSong();
    singSong(song);

    // const song2 = getSong2();
    // singSong(song2);

    const function1 = function (arg, callback) {
        callback(arg);
    };
    const function2 = function (arg, callback) {
        callback(arg);
    };
    const function3 = function (arg, callback) {
        callback(arg);
    };

    const arg1 = 'arg 1';
    const arg2 = 'arg 2';
    const arg3 = 'arg 3';
    const operations = [
        { func: function1, args: arg1 },
        { func: function2, args: arg2 },
        { func: function3, args: arg3 }
    ];

    function executeFunctionWithArgs(operation, callback) {
        const { args, func } = operation;
        func(args, callback);
    }

    function serialProcedure(operation) {
        if (!operation) {
            return;
        }
        executeFunctionWithArgs(operation, function (result) {
            console.log(`${result} are recv `)
            serialProcedure(operations.shift());
        });
    }

    serialProcedure(operations.shift());

};

module.exports = FlowControl;