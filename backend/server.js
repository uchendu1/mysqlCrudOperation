
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: '1234',
    password: "root",
    database: "CRUD"
})

console.log('db is:......', db)


 app.get('/', (req, res) => {
     const sql = "SELECT * FROM learners";
     db.query(sql, (err, data) => {
        console.log(db, ':.......db')
         if(err) return res.json(err);

         return res.json(data);
     })
 })


app.listen(8080, () => {
    console.log('app is listening.....')
})

