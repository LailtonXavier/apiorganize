"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _ContactController = require('../controllers/ContactController'); var _ContactController2 = _interopRequireDefault(_ContactController);

const routes = _express.Router.call(void 0, );

routes.get('/', _ContactController2.default.index);
// routes.post('/', contactController.store);
routes.post('/', _ContactController2.default.sendEmail);

exports. default = routes;
