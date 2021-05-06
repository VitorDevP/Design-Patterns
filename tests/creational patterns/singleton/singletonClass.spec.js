const { expect } = require('chai');
var { mySingleton, mySingletonStaticGet, mySingletonClassStatic } = require('../../../creational patterns/singleton/singletonClass');

describe("check singleton", () => {
    it('Check if singleton by class constructor', () => {
        expect(new mySingleton() === new mySingleton()).to.be.true
    })

    it('Check if singleton by static method', () => {
        expect(mySingletonStaticGet.getInstance() === mySingletonStaticGet.getInstance()).to.be.true
        expect(() => new mySingletonStaticGet()).to.Throw("Should use getInstance() to invoke class")
    })

    it('Check if singleton works with constructor or static method', () => {
        expect(mySingletonClassStatic.getInstance() === new mySingletonClassStatic()).to.be.true
    })    
})