const { Pool } = require('pg');
const {} = process.env;

if (dbUrl === "test") {

}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool();
