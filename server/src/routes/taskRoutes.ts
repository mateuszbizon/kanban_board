import express from "express"
import { createTaskController } from "../controllers/tasks/createTaskController"
import { updateTaskController } from "../controllers/tasks/updateTaskController"
import { deleteTaskController } from "../controllers/tasks/deleteTaskController"

const router = express.Router()

router.patch("/create-task/:columnId", createTaskController)
router.put("/update-task/:taskId/:columnId", updateTaskController)
router.delete("/delete-task/:taskId", deleteTaskController)

export default router