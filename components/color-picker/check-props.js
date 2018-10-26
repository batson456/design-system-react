"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentIsPrototype = require("../../utilities/warning/component-is-prototype");

var _componentIsPrototype2 = _interopRequireDefault(_componentIsPrototype);

var _onlyOneOfProperties = require("../../utilities/warning/only-one-of-properties");

var _onlyOneOfProperties2 = _interopRequireDefault(_onlyOneOfProperties);

var _getComponentDoc = require("../../utilities/get-component-doc");

var _getComponentDoc2 = _interopRequireDefault(_getComponentDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props, jsonDoc) {
    var createDocUrl = (0, _getComponentDoc2.default)(jsonDoc);
    (0, _componentIsPrototype2.default)(COMPONENT);
    (0, _onlyOneOfProperties2.default)(COMPONENT, {
      'assistiveText.label': props.assistiveText && props.assistiveText.label,
      label: props.labels.label
    }, createDocUrl('assistiveText'));
  };
}

exports.default = checkProps;