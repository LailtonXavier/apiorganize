import Sequelize, { Model } from 'sequelize';

export default class Contact extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Send a message between 3 to 255 characters',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },

      telephone: {
        type: Sequelize.STRING,
        defaultValue: '',

      },

      message: {
        type: Sequelize.STRING,
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
}
