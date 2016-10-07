'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Excel = _react2.default.createClass({
  displayName: 'Excel',

  _renderToolbar: function _renderToolbar() {
    console.log('rendering toolbar');
  },
  _renderTable: function _renderTable() {
    console.log('rendering table');
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'Excel' },
      this._renderToolbar(),
      this._renderTable()
    );
  }
});

exports.default = Excel;