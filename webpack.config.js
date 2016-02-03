var jade = require('jade');

// Compile a function
var fn = jade.compileFile('./jade/resume.jade', {});

var locals = require('./resume.json')

// Render the function
var html = fn(locals);

console.log(html);