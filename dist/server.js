"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 3003;
_app2.default.listen(port, () => {
  console.log();
  console.log('Esta rodando na porta http://localhost:3003');
});
