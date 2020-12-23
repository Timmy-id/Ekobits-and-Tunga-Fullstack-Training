require('dotenv').config();
const { Client } = require('pg');

const db_user = process.env.PG_USER;
const db_password = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const db_name = process.env.PG_DATABASE;

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

client.connect();

module.exports = client;
