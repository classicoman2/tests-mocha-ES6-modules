/**
 *  TESTS AMB CHAI
 * 
 *  He emprat la documentació de Chai, https://www.chaijs.com/
 * 
 *  assert --> TDD (clàssic)
 *  expect, should --> BDD (més modern)
 *
 */


var assert = require("chai").assert;
var expect = require("chai").expect;

const operacions = require("../src/operacions");


 /* DESCRIBE: apartat */
describe("#proves amb creaArrayDe3()", function () {
    /* IT: TEST CASE */
  it("la longitud es 3", function () {
    //assert.lengthOf()
    assert.lengthOf(
      operacions.creaArrayDe3(1, 2, 3),
      3,
      "array es de longitud 3"
    );
    //expect().to.have.length()
    expect(operacions.creaArrayDe3(1, 2, 3)).to.have.length(3);
  });

  it("Els tres elements de l'array estan inclosos a dins d'ell", function () {
    //expect().to.include()
    expect(operacions.creaArrayDe3(10, 20, 35)).to.include(10);
    expect(operacions.creaArrayDe3(10, 20, 35)).to.include(20);
    expect(operacions.creaArrayDe3(10, 20, 35)).to.include(35);
  });

  /* CONTEXT: Purament descriptiu, subapartat dins un Describe */
  context("amb numeros", function () {
    it("Els tres elements són de tipus 'number", function () {
      //assert.typeOf
      assert.typeOf(operacions.creaArrayDe3(10, 20, 35)[0], "number");
      //assert.equal
      assert.equal(typeof operacions.creaArrayDe3(10, 20, 35)[1], "number");
      //expect().to.be.a()
      expect(operacions.creaArrayDe3(10, 20, 35)[2]).to.be.a("number");
    });
  });

  /*  
    context('with number arguments', function() {
      it('should return sum of arguments', function() {
        expect(sum(1, 2, 3, 4, 5)).to.equal(15)
      })
      
      it('should return argument when only one argument is passed', function() {
        expect(sum(5)).to.equal(5)
      })
    })
    
    context('with non-number arguments', function() {
      it('should throw error', function() {
        expect(function() {
          sum(1, 2, '3', [4], 5)
        }).to.throw(TypeError, 'sum() expects only numbers.')
      })
    })
    */
});
//describe('Proves amb Arrays',  function() {

/*
assert("foo" !== "bar", "foo is not bar");
assert(Array.isArray([]), "empty arrays are arrays");

assert.isArray(operacions.creaArrayDe3(1, 2, 3), "is array of numbers");
//assert.include(numbers, 2, 'array contains 2');
///assert.lengthOf(numbers, 5, 'array contains 5 numbers');
*/
//})
