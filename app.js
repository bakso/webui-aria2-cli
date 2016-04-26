#!/usr/bin/env node

var koa = require('koa');
var path = require('path');
var open = require('open');
var staticCache = require('koa-static-cache');
var app = koa()
app.use(staticCache(path.join(__dirname, 'static')), {
    maxAge: 365 * 24 * 60 * 60
});
app.listen(4000);

open('http://localhost:4000/index.html');
console.log('Please visit http://localhost:4000/index.html to open webui.');