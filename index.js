function receivesAFunction(spy){
   return spy()
}

function returnsANamedFunction(){
    function name(){name}
    return name
}

function returnsAnAnonymousFunction() {
    return function(){}
}