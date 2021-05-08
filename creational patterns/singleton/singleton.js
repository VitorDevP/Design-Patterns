function singleton() {
    if(!singleton.instance) singleton.instance = this;

    return Object.freeze(singleton).instance
}

//Private instance attribute, using closure
function singletonClosure(){
    var instance;

    singletonClosure = function(){
        return instance;
    }

    instance = this;
}

new singletonClosure()

module.exports = { singleton, singletonClosure }