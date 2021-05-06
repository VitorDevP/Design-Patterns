// Allow invoke class using constuctor but always returning the unique instance of class
class mySingleton{
    constructor(){
        if(!mySingleton.instance) mySingleton.instance = this;
        return mySingleton.instance
    }
}

// This approach does not allow use constructor methods to invoke class, instead should use getInstance()
class mySingletonStaticGet{
    constructor(){
        throw new Error("Should use getInstance() to invoke class")
    }

    static getInstance(){
        if(!mySingletonStaticGet.instance) mySingletonStaticGet.instance = this;
        return mySingletonStaticGet.instance;
    }
}

// This approach allow both invoke methods, using contructor or static method
class mySingletonClassStatic{
    constructor(){
        // your code goes here
        if(!mySingletonClassStatic.instance) mySingletonClassStatic.instance = this;
        return mySingletonClassStatic.instance
    }

    static getInstance(){
        return new mySingletonClassStatic()
    }
}


module.exports = { mySingletonClassStatic, mySingletonStaticGet, mySingleton }