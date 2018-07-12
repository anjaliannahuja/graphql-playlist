const pg = require('pg');

require('dotenv').config();

//connect to postgres local db with credentials
const client = new pg.Client(process.env.DATABASE_URL);

client.connect(err => {
  if (err) {
    console.error('error: ', err);
  } else {
    console.log('CONNECTED to local postgres db');
  }
});

client.query;

module.exports = client;
