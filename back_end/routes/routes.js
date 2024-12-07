const express = require("express");
const router = express.Router();
const todo_ = require("../models/models");
const controller = require("../controllers/controllers");

router.get("/", (req, res) => {
    res.send("<h1>todo app chal rha h..<h1>");
});

router.get("/todos", async (req, res) => {
    const todos = await todo_.find();
    res.send(todos);
});

router.get("/create", async (req, res) => {
    const todo = await todo_.create({
        title: "todo list",
        description: "task description..",
    });
    res.redirect("/todos");
    console.log("created successfully");
});

router.get('/completed/:id', async (req,res) => {
    const todo = await todo_.findByIdAndUpdate(req.params.id,{completed: true});
    res.redirect('/todos');
})

router.get('/uncompleted/:id', async (req,res) => {
    const todo = await todo_.findByIdAndUpdate(req.params.id,{completed: false});
    res.redirect('/todos');
})

router.get('/delete/:id', async (req,res) => {
    const todo = await todo_.findByIdAndDelete(req.params.id);
    res.redirect('/todos');
})

router.get('/todo/:id', async (req,res) => {
    const todo = await todo_.findById(req.params.id);
    res.send(todo);
})

router.get('/todo_date/:id', async (req,res) => {
    controller.getToDoByDate(req,res);
})

module.exports = router;