const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getTasks,
  createTask,
  deleteTask
} = require("../controllers/taskController");

router.use(protect);

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

module.exports = router;