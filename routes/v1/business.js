"use strict";
const express = require('express');
const router = express.Router();
const businessHandler = require("../../routeHandlers/businessHandler");

router.get('/:businessId', function(req, res, next) {
    businessHandler.getBusinessById(req, res, next);
});

router.get("/", function(req, res){
    res.send("Hello Business World!");
})

module.exports = router;
