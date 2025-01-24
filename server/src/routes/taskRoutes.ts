import express from "express"
import { createTaskController } from "../controllers/tasks/createTaskController"
import { updateTaskController } from "../controllers/tasks/updateTaskController"
import { deleteTaskController } from "../controllers/tasks/deleteTaskController"
import { moveTaskController } from "../controllers/tasks/moveTaskController"

const router = express.Router()

router.patch("/create-task/:columnId", createTaskController)
router.put("/update-task/:taskId/:columnId", updateTaskController)
router.delete("/delete-task/:taskId", deleteTaskController)
router.patch("/move-task/:taskId/:newColumnId", moveTaskController)

export default router