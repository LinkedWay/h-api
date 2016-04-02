"use strict";
let assert = require("assert");
let fixture = require("z-fixture-loader");

describe ("When get business from business api", function(){
  before(function(done){
    fixture.loadFixturesToElasticsearch(function(error){
      if(error) done(error);
      done()
    });

  });
  it("should return 1 business ",function(){
    assert(true);
  });

});
