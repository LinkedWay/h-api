"use strict";
const ES_HOST = process.env.ES_HOST || "localhost";
const ES_PORT = process.env.ES_PORT || "9200";
const ES_INDEX = process.env.ES_INDEX || "test-index";
const ES_TYPE = process.env.ES_TYPE || "test";
const ES_API_VERSION = process.env.ES_API_VERSION || "2.2";

(function() {
  let Elasticsearch, client, es, esConfig;

  esConfig = require("./esConfig")[process.env.NODE_ENV];

  if (ES_HOST && ES_PORT)
    esConfig.host = `${ES_HOST}:${ES_PORT}`;
  if(ES_INDEX)
    esConfig.indexName = ES_INDEX;
  if(ES_TYPE)
    esConfig.typeName = ES_TYPE;
  if(ES_API_VERSION)
    esConfig.apiVersion = ES_API_VERSION;

  Elasticsearch = require("elasticsearch");

  es = require("debug")("es");

  es(esConfig);

  client = new Elasticsearch.Client(esConfig);

  client.indexName = esConfig.indexName;

  client.typeName = esConfig.typeName;

  module.exports = client;

}).call(this);
