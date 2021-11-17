"use strict";module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'contacts',
    [
      {
        name: 'Leticia',
        email: 'leticia@gmail.com',
        message: 'Leticia enviando dados pelo meu SEEDS',
        telephone: '81971210044',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {},

  ),

  down: () => { },
};
