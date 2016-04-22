'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compile(path) {
  var fn = arguments.length <= 1 || arguments[1] === undefined ? 'get' : arguments[1];

  return (0, _compiler2.default)(path, fn, true);
}