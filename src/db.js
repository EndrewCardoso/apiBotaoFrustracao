const mysql = require('mysql2');

const cnn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

cnn.connect((error)=>{
    if (error) throw error;
    console.log('Banco de Dados conectado!');
});

module.exports = cnn;