require('dotenv').config();

module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/tips.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/tips.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },

  

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=1',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};

// module.exports = { 

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/tips.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },
//   testing: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/test.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },

// staging: {
//   client: 'postgresql',
// }

// };
