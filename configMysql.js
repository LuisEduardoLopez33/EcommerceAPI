const mysql = require('mysql')
const config = {
    host: 'localhost',
    port: '3306',
    user: 'user.bd',
    database: 'ecommerce',
    password: '12345'
}

const conn = mysql.createConnection(config)

conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!!!!')
})

module.exports = conn;