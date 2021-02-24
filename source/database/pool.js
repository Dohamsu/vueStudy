const { Pool } = require('pg');

//DB 정보 세팅 
const pool = new Pool({
    user : 'mcnc',
    host : 'vue-db',
    //host : 'localhost',
    database : 'vuedb',
    password : 'gomcnc!!',
    port : 5432,
});

module.exports = pool