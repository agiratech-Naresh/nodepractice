const db = require("mysql")

const pool = db.createPool({
    host:"localhost",
    user:"root",
    password:"agira@123",
    database:"user"
});

if(pool) console.log(true);

module.exports = pool;