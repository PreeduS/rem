//import * as basic from '../functions/basic';
const basic = require('../functions/basic');


test("First test", () => {
    expect( basic.add(2,2) ).toBe(4);
});

test("Object should match", () => {
    expect( basic.checkObject() ).toEqual({
        name: 'test'
    });
});

test("Value should be an email", () => {
    expect("something@zzz.zz").toMatch(/^.{3,}@.+\..+$/)
});

test("Item should be in list", () => {
    let list = ["aaa","bbb"]
    expect(list).toContain('aaa')
});

describe("Describe test", () => {
    beforeEach( () => console.log('before async tests') );

    test("Async test", () => {
        expect.assertions(1);
        return basic.asyncTest().then( result => {
            expect(result).toBe(2);
        })
    });
    test("Multiple async test", () => {
        expect.assertions(2);
        return basic.asyncTest().then( result => {
            expect(result).toBe(2);
        }).then( result => {
            expect(2).toBe(2);
        })
    
      
    });

});










/*
toBe()        //value type comparison
toEqual()               //check objects
toBeNull()
toBeFalsy()
toBeTruthy()
not.toBeTruthy()


.toBeLessThan()
.toBeGreaterThan()




expect.hasAssertions()      //verifies that at least one assertion(callback) is called during a test. 
expect.assertions(number)   //verifies that a certain number of assertions are called during a test

*/


/*
beforeEach( () => {})
afterEach( () => {})
beforeAll( () => {})
afterAll( () => {})
*/