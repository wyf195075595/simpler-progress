/*!
 * RollupDemo.js v1.0.0
 * https://195075595.github.io
 *
 * Copyright 2023-present wyf
 * Released under the ISC license
 *
 * Date: 2023-03-22T01:38:09.276Z
 */

define((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var message = {
    hi: "Hey Guys, I am zce~"
  };

  var name = "rollup-demo";
  var version = "1.0.0";

  var esm = require("./cjs-module");
  var Test = /*#__PURE__*/function () {
    function Test(name, msg, version) {
      _classCallCheck(this, Test);
      this.msg = msg;
      this.name = name;
      this.version = version;
    }
    _createClass(Test, [{
      key: "sayHi",
      value: function sayHi(msg) {
        console.log(msg);
      }
    }]);
    return Test;
  }();
  var instance = new Test(name, message.hi, version);
  instance.sayHi(esm.name);

  return instance;

}));
