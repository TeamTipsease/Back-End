// require('dotenv').config();

// module.exports = {

//     development: {
//       client: 'pg',
//       connection: {
//         database: process.env.DB_DEV_DATABASE,
//         user: process.env.DB_DEV_USER,
//         password: process.env.DB_DEV_PASSWORD
//       },
//       useNullAsDefault: true,
//       migrations: {
//         directory: './data/migrations',
//       },
//       seeds: {
//         directory: './data/seeds',
//       },
//     },
//     testing: {
//       client: 'sqlite3',
//       connection: {
//         filename: './data/test1.db3',
//       },
//       useNullAsDefault: true,
//       migrations: {
//         directory: './data/migrations',
//       },
//       seeds: {
//         directory: './data/seeds',
//       },
//     },

  

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//       directory: './data/migrations'
//     },
//     seeds: {
//       directory: './data/seeds'
//     }
//   }

// };

module.exports = { 

  development: {
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
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

staging: {
  client: 'postgresql',
}

};
