//Configuração do banco de dados 
const sqlite3 = require('sqlite3').verbose();

// Diretório de criação do banco de dados (na pasta root)
const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');

        //Cria o banco de dados (caso não exista)
        db.run(`CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed TEXT DEFAULT 'false'
        )`, (err) => {
            if (err) {
                console.error('Erro ao criar tabela de tasks:', err.message);
            } else {
                console.log('Tabela de tasks pronta para uso.');
            }
        });
    }
});

module.exports = db;
