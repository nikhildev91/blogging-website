const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env. PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

pool.connect((err, done) => {
    if(!err){
        console.log(`Database connected on ${done.host} ${done.port}`);
    }else {
        console.log(err);
    }
})

const execute = async (query, array) => {
    try {
        const result = await pool.query(query, array);
        return {result, status : true};
    } catch (error) {
        console.error(error.stack);
        return {error, status : false};
    }
};


module.exports = execute
