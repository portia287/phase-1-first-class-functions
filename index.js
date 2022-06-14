function recievesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    let callback = function(){}
    return callback
}

function returnsAnAnonymousFunction(){
    return function (){}
}
