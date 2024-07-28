const {Router} = require("express");
const { addNewTask, getAllTask, update, deleteTask } = require("../controllers/task.contoller");

const router = Router();

router.post("/add", addNewTask)

router.get("/", getAllTask)

router.put("/update/:id", update)

router.delete("/delete/:id", deleteTask)

module.exports = router