var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestutils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDos = require('ToDos');

describe('ToDos',()=>{
    it('should exist',()=>{
        expect(ToDos).toExist();
    });
});