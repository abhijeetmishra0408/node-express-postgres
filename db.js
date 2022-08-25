const Pool = require("pg").Pool;
require('dotenv').config();

// const db_url = process.env.DATABASE_URL

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()

// const pool = new Pool({
//     user: process.env.db_user,
//     password: process.env.db_password,
//     host: process.env.db_host,
//     port: process.env.db_port,
//     database: process.env.database
// })

module.exports = client;