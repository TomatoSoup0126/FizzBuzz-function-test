var should = chai.should()
describe('Test FizzBuzz function', function () {
  it('Input integer can be divisible by 3,return Fizz', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })

  it('Input integer can be divisible by 5,return Buzz', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })

  it('Input integer can be divisible by 3 and 5,return FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })

  it('Input integer cannot be divisible by 3 and 5,return input integer', function () {
    var result = fizzBuzz(2)
    result.should.be.equal(2)
  })
})