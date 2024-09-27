const express = require('express')
const router = express.Router()
const { TaskPostController,
        TaskGetController, 
        TaskGetByIdController,
        TaskGetByTitleController,
        TaskPatchByIdController,
        TaskDeleteByIdController,
        TaskPatchCompleteController,
    } = require('../controllers/tasksController')
    
//Rotas POST
router.post('/tasks', (req, res) => TaskPostController(req, res))

//Rotas GET
router.get('/tasks', (req, res) => TaskGetController(req, res))
router.get('/tasks/:id', (req, res) => TaskGetByIdController(req, res))
router.get('/tasks/search/:title', (req, res) => TaskGetByTitleController(req, res))

//Rotas PATCH
router.patch('/tasks/:id', (req, res) => TaskPatchByIdController(req, res))
router.patch('/tasks/complete/:id', (req, res) => TaskPatchCompleteController(req, res))

//Rotas DELETE
router.delete('/tasks/:id', (req, res) => TaskDeleteByIdController(req, res))

module.exports = router