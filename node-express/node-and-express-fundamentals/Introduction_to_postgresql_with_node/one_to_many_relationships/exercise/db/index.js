const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'grads_offers_node',
    password: 'password',
    port: '5432'
});

module.exports = pool;
