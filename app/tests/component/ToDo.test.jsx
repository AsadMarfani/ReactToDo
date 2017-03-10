var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestutils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDo = require('ToDo');

describe('ToDo',()=>{
   it('should exist',()=>{
       expect(ToDo).toExist();
   });
});