(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age() {
    _classCallCheck(this, Age);
  }

  _createClass(Age, [{
    key: "secondsInYear",
    value: function secondsInYear(earthAge) {
      var yearToSeconds = 31536000;
      var ageConvertedIntoSeconds = earthAge * yearToSeconds;
      return ageConvertedIntoSeconds;
    }
  }, {
    key: "mercuryAge",
    value: function mercuryAge(earthAge) {
      var yearToSeconds = 31536000;
      var ageConvertedIntoMercuryAge = earthAge * yearToSeconds * .24;
      return ageConvertedIntoMercuryAge;
    }
  }, {
    key: "venusAge",
    value: function venusAge(earthAge) {
      var yearToSeconds = 31536000;
      var ageConvertedIntoVenusAge = earthAge * yearToSeconds * .62;
      return ageConvertedIntoVenusAge;
    }
  }, {
    key: "marsAge",
    value: function marsAge(earthAge) {
      var yearToSeconds = 31536000;
      var ageConvertedIntoMarsAge = earthAge * yearToSeconds * 1.88;
      return ageConvertedIntoMarsAge;
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge(earthAge) {
      var yearToSeconds = 31536000;
      var ageConvertedIntoJupiterAge = earthAge * yearToSeconds * 11.86;
      return ageConvertedIntoJupiterAge;
    }
  }]);

  return Age;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _calculator = require('./../js/calculator.js');

$(document).ready(function () {
  $('#age-form').submit(function (event) {
    event.preventDefault();
    var age = $("#age").val();
    var seconds = ageConvertedIntoSeconds(age);
    var mercury = ageConvertedIntoMercuryAge(age);
    var venus = ageConvertedIntoVenusAge(age);
    var mars = ageConvertedIntoMarsAge(age);
    var jupiter = ageConvertedIntoJupiterAge(age);
    $("#seconds").text(seconds);
    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
