const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()


const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors()); 
server.use(bodyParser.json());

const PORT = 7000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if (err) return console.log(err);
    console.log('Conectado com sucesso!');
})

server.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM user WHERE username =? AND password =?', [username, password], (err, results) => {
        if (err) {
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
        }
        if (results.length > 0) {
            const { id, username, firstname, lastname } = results[0];
            res.json({ success: true, user: { id, username, firstname, lastname } });
        } else {
            res.json({ success: false, error: 'Usuário ou senha inválidos' });
        }
    })
})

server.post('/new-comment'), (req, res) => {
    const { author, comment_text } = req.body;
    db.query('INSERT INTO comment (author, comment_text) VALUES(?,?)', [author, comment_text], (err, results) => {
        if (err) {
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
        }
        res.json({ success: true, comment: results });
    });
}
server.get('/comment', (req, res) => {
    db.query('SELECT * FROM comment', (err, results) => {
        if (err) {
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
        }

        res.json({ success: true, comment: results });
    });
});
server.get('/user', (req, res) => {
    db.query('SELECT * FROM user ', (err, results) => {
        if (err) {
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
        }

        res.json({ success: true, user: results });
    });
});

server.listen(PORT, () => {
    console.log(`O server está rodando em http:\\localhost:${PORT}`)
})