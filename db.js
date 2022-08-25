const Pool = require("pg").Pool;
require('dotenv').config();

// const db_url = process.env.DATABASE_URL

// const { Client } = require('pg');


if (process.env.dev_env) {
    const client = new Pool({
        user: process.env.db_user,
        password: process.env.db_password,
        host: process.env.db_host,
        port: process.env.db_port,
        database: process.env.database
    })
    module.exports = client;
}

if (!process.env.dev_env) {
    const client = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    module.exports = client;

}