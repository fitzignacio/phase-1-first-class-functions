function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    function iHaveAName() {
    };

    return iHaveAName;
}

function returnsAnAnonymousFunction() {
    return (function() {});
};

// const returnsAnAnonymousFunction = () => console.log('does this work')
