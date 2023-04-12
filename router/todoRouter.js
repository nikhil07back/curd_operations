const express = require("express");
const {
  getTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/controller");

const router = express.Router();

router.get("/", getTodos);

router.get("/:id", getSingleTodo);

router.post("/create", createTodo);

router.put("/update/:id", updateTodo);

router.delete("/delete/:id", deleteTodo);

module.exports = router;
