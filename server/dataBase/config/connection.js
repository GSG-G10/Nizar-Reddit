const { Pool } = require('pg');

const { DEV_DB_URL, TEST_DB_URL, DATABASE_URL } = process.env;
let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else {
  throw new Error('DATA BASE ERROR');
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
