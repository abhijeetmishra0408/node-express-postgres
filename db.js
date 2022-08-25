const Pool = require("pg").Pool;
require('dotenv').config();

const db_url = process.env.DATABASE_URL

if (db_url) {
    const pool = new Pool({
        connectionString: db_url,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    const pool = new Pool({
        user: process.env.db_user,
        password: process.env.db_password,
        host: process.env.db_host,
        port: process.env.db_port,
        database: process.env.database
    })
}

module.exports = pool;