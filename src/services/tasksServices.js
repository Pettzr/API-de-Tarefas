const db = require('../config/dbConfig')

// Service para inserir uma nova tarefa no banco de dados
function TaskPostServices(title, description) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)'

        db.run(sql, [title, description], function (err, row) {
            if (err) {
                console.error('Erro ao inserir task:', err.message)
                reject(err);
            } else {
                const task = { id: this.lastID, title, description }
                console.log('Tarefa inserida com sucesso', task)
                resolve(task);
            }
        });
    });
}

// Service que busca todas as tarefas disponíveis
function TaskGetServices() {
    const sql = 'SELECT * FROM tasks';

    return new Promise((resolve, reject) => {
        db.all(sql, [], function (err, rows) {
            if (err) {
                console.error('Erro ao buscar tarefas:', err.message)
                reject(err);
            } else {
                console.log('Tarefas:', rows)
                resolve(rows);
            }
        });
    });
}

// Service para buscar uma tarefa por seu id
async function TaskGetByIdServices(id) {
    const sql = 'SELECT * FROM tasks WHERE id = ?';

    return new Promise((resolve, reject) => {
        db.get(sql, [id], function (err, row) {
            if (err) {
                console.error('Erro ao buscar tarefa pelo ID:', err.message);
                reject(err);
            } else if (row) {
                console.log('Tarefa encontrada:', row);
                resolve(row);
            } else {
                resolve(null);
            }
        });
    });
}

//Service que retorna todas as tarefas que incluem a pesquisa feita em seu nome
async function TaskGetByTitleServices (title) {
    const sql = 'SELECT * FROM tasks WHERE title LIKE ?';

    return new Promise((resolve, reject) => {
        db.all(sql, [`%${title}%`], function (err, rows) {
            if (err) {
                console.error('Erro ao buscar tarefas pelo título:', err.message)
                reject(err);
            } else if (rows) {
                console.log('Tarefa encontrada:', rows)
                resolve(rows);
            } else {
                resolve(null);
            }
        })
    })
}

//Service que atualiza informações das tarefas (titulo e descrição somente)
async function TaskPatchByIdServices(id, title, description) {
    const sql = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';

    return new Promise((resolve, reject) => {
        db.run(sql, [title, description, id], function (err) {
            if (err) {
                console.error('Erro ao atualizar tarefa:', err.message)
                reject(err);
            } else if (this.changes === 0) {
                resolve(null);
            } else {
                const task = { id, title, description}
                console.log('Tarefa atualizada com sucesso', task)
                resolve(task);
            }
        });
    });
}

//Service para excluir uma tarefa por seu id
async function TaskDeleteByIdServices (id) {
    const sql = 'DELETE FROM tasks WHERE id = ?'

    return new Promise((resolve, reject) => {
        db.run(sql, [id], function (err) {
            if (err) {
                console.error('Erro ao deletar tarefa: ', err.message)
                reject(err);
            } else if (this.changes === 0) {
                resolve(null);
            } else {
                console.log('Tarefa deletada com sucesso, ID:', id);
                resolve(id);
            }
        });
    });
}

//Service para alterar o status de concluído de uma tarefa
async function TaskPatchCompleteServices(id) {
    const sql = 'SELECT * FROM tasks WHERE id = ?';

    return new Promise((resolve, reject) => {
        db.get(sql, [id], function (err, row) {
            if (err) {
                console.error('Erro ao buscar tarefa pelo ID:', err.message);
                reject(err);
            } else if (row) {
                console.log('Tarefa encontrada:', row);

                const complete = row.completed === "true" ? "false" : "true" 
                const updateSql = 'UPDATE tasks SET completed = ? WHERE id = ?'

                //Após encontrar o id, alterar para true ou false, dependendo do seu estado anterior
                db.run(updateSql, [complete, id], function (err) {
                    if (err) {
                        console.error('Erro ao atualizar tarefa:', err.message);
                        reject(err);
                    } else {
                        console.log(`Tarefa com ID ${id} atualizada para completed = ${complete}`);
                        resolve({ id, completed: complete });
                    }
                })
            } else {
                resolve(null);
            }
        });
    });
}

module.exports = {
    TaskPostServices,
    TaskGetServices,
    TaskGetByIdServices,
    TaskGetByTitleServices,
    TaskPatchByIdServices,
    TaskDeleteByIdServices,
    TaskPatchCompleteServices
}