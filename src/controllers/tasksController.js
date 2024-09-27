const { TaskPostServices, 
        TaskGetServices, 
        TaskGetByIdServices, 
        TaskGetByTitleServices, 
        TaskPatchByIdServices,
        TaskDeleteByIdServices,
        TaskPatchCompleteServices,
    } = require("../services/tasksServices")


// Controler da rota POST de tarefas
async function TaskPostController (req, res) {
    let {title, description} = req.body;
    title ? title = title.trim() : null
    description ? description = description.trim() : description = ''
    
    if (title && title !== ""){
        try {
            const task = await TaskPostServices(title, description);
            res.status(201).json(task);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao criar a tarefa' });
        }
    } else {
        res.status(400).json({error: 'O título não pode ser vazio'})
    }
}


// Controler da rota GET ALL (retorna todas as tarefas)
async function TaskGetController (req, res) {
    try {
        const tasks = await TaskGetServices();
        if(tasks.length > 0){
            res.status(200).json(tasks);
        } else {
            res.status(404).json({message :'Nenhuma tarefa encontrada'})
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao encontrar a tarefa' });
    }
}


// controler da rota GET por ID (retorna somente a task do id selecionado)
async function TaskGetByIdController(req, res) {
    const { id } = req.params;
    try {
        const task = await TaskGetByIdServices(id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar a tarefa' });
    }
}


// Controler da rota GET por TITLE (retornar todas as tarefas cujo título inclui a busca)
async function TaskGetByTitleController (req, res) {
    const {title} = req.params;

    try {
        const tasks = await TaskGetByTitleServices(title);
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar a tarefa' });
    }
}


//Controler da rota PATCH das tarefas (altera algum dado de uma determinada tarefa)
async function TaskPatchByIdController(req, res) {
    const { id } = req.params;
    let {title, description} = req.body;
    title ? title = title.trim() : null
    description ? description = description.trim() : description = ''

    if (title && title !== "") {
        try {
            const task = await TaskPatchByIdServices(id, title, description);
            if (task) {
                res.status(200).json(task); 
            } else {
                res.status(404).json({ error: 'Tarefa não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
        }
    } else {
        res.status(400).json({error: 'O título não pode ser vazio'})
    }
}

//Controller da rota DELETE (deleta uma tarefa através de seu id)
async function TaskDeleteByIdController (req, res) {
   const {id} = req.params;
   
   try {
        const task = await TaskDeleteByIdServices(id)
        if(task) {
            res.status(200).json(`Tarefa do ID: ${task} deletada com sucesso.`); 
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir a tarefa' });
    }
}

//Controller da rota PATCH para conclusão (altera o estado de conclusão de uma tarefa)
async function TaskPatchCompleteController (req, res) {
    const { id } = req.params;

    try {
        const task = await TaskPatchCompleteServices(id)
        if(task) {
            res.status(200).json(`Tarefa do ID: ${task.id} alterada para ${task.completed} com sucesso.`); 
            } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Erro ao alterar a tarefa' });
    }
}

module.exports = {
    TaskPostController,
    TaskGetController,
    TaskGetByIdController,
    TaskGetByTitleController,
    TaskPatchByIdController,
    TaskDeleteByIdController,
    TaskPatchCompleteController
}
