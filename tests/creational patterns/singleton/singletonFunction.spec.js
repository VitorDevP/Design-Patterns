const { expect } = require('chai');
const {singleton, singletonClosure} = require('../../../creational patterns/singleton/singleton');

describe("check singleton", () => {
    it('Check if singleton by class constructor', () => {
        expect(new singleton() == new singleton()).to.be.true
    })

    it('Check if instance singleton is immutable', () => {
        singleton.instance = null
        expect(singleton.instance == new singleton()).to.be.true
    })

    it('Check singleton closure', () => {
        // expect(new singletonClosure() == new singletonClosure()).to.be.true
        expect(new singletonClosure().instance).to.be.undefined
    })

    // it('Check if singleton by static method', () => {
    //     expect(mySingletonStaticGet.getInstance() === mySingletonStaticGet.getInstance()).to.be.true
    //     expect(() => new mySingletonStaticGet()).to.Throw("Should use getInstance() to invoke class")
    // })

    // it('Check if singleton works with constructor or static method', () => {
    //     expect(mySingletonClassStatic.getInstance() === new mySingletonClassStatic()).to.be.true
    // })    
})