"use strict";
let esClient    = require('../config/esClient');

function getBusinessById(id, callback){
  esClient.search({
    body: {
      "query": {
        "match_all": {}
      }
    }
  }).then(function (body) {
    callback(undefined, body.hits.hits);
  }, callback);

};

module.exports = {
  getBusinessById: getBusinessById
};
