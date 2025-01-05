const express = require("express");
const router = express.Router();
const {controller,user} = require("../controllers/controllers");

// Home route
router.get("/", (req, res) => {
    res.send("<h1>Todo App API</h1>");
});

// User routes
router.post('/create/User', user.createUser);

// Todo routes
router.get("/todos", controller.getAllTodos);
router.post("/createTodo", controller.createTodo);
router.put('/todos/:id/toggle', controller.toggleTodoStatus);
router.delete('/todos/:id', controller.deleteTodo);
router.get('/todos/:id', controller.getTodoById);
router.get('/todo_date/:id', controller.getToDoByDate);

module.exports = router;