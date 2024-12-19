const {createPool} = require('mysql2');

 const pool = createPool({
    host:"localhost",
    user: "root",
    password:"Ka59tfD1AnE@",
    database:"db_file",
    connectionLimit: 10
 })

pool.query('SELECT * FROM file', (err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})