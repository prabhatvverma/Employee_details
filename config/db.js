const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'employees',
    user: 'root',
    password: 'nayan@'
});

connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connected !");
    }
});

module.exports = connection;