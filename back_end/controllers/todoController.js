const todo_ = require("../models/todoModel");

const controller = {
    // Get all todos
    getAllTodos: async (req, res) => {
        try {
            const todos = await todo_.find();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new todo
    createTodo: async (req, res) => {
        try {
            const { title, description } = req.body;
            const todo = await todo_.create({ title, description });
            res.status(201);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Toggle todo completion status
    toggleTodoStatus: async (req, res) => {
        try {
            const todo = await todo_.findById(req.params.id);
            todo.completed = !todo.completed;
            await todo.save();
            res.status(200).json(todo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a todo
    deleteTodo: async (req, res) => {
        try {
            const todo = await todo_.findByIdAndDelete(req.params.id);
            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }
            res.status(200).json({ message: "Todo deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get todo by ID
    getTodoById: async (req, res) => {
        try {
            const todo = await todo_.findById(req.params.id);
            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }
            res.status(200).json(todo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get todos by date
    getToDoByDate: async (req, res) => {
        try {
            const todo = await todo_.findById(req.params.id);
            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }
            res.status(200).json({ createdAt: todo.createdAt });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

};

module.exports = {controller};