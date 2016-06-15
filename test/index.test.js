let expect = require('chai').expect
var request = require('superagent');
let boot = require('../bin/index').boot
let shutdown = require('../bin/index').shutdown
let port = require('../bin/index').port
const ROOT_PATH = 'http://localhost:' + port
describe('basic-node-serve', function () {
  before(function () {
    boot()
  });

  it('should respond to GET',function(done){
    request
      .get(ROOT_PATH)
      .end(function(err, res){
        expect(res.status).to.equal(200);
        done()
      })
  })

  after(function () {
    shutdown()
  })
})