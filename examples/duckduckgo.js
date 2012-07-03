// Generated by CoffeeScript 1.3.1
(function() {
  var ddg, express, fs, keys, read, rem;

  rem = require('../rem');

  fs = require('fs');

  read = require('read');

  express = require('express');

  keys = JSON.parse(fs.readFileSync(__dirname + '/keys.json'));

  ddg = rem.load('duckduckgo', '1');

  ddg.get({
    q: 'java'
  }, function(err, json, obj) {
    return console.log('Search for "java" heading:', json.Heading);
  });

}).call(this);