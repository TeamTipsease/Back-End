const knex = require("knex");

const config = require("../knexfile");

const dbEnv = process.env.DB_env || 'development'

module.exports = knex(config[dbEnv]);