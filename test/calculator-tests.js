var calculator = require('../app/calController');
var expect = require('chai').expect;

describe("multiplication", function(){
  it("should multiply 2 and 3", function(){
    var product = calculator.multiply(2,3);
    expect(product).to.be(6);
  });
})
