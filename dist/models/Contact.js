"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Contact extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Send a message between 3 to 255 characters',
          },
        },
      },

      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },

      telephone: {
        type: _sequelize2.default.STRING,
        defaultValue: '',

      },

      message: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [10, 300],
            msg: 'Send a message between 10 to 300 characters',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Contact;
