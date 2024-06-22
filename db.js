const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port:3007,
    password: 'chayan',
    database: 'organ_donation'
})

connection.connect(function(err) {
    if (err)
        throw err

    console.log('Database connected!')
})

module.exports = connection