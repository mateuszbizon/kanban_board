import express from "express"
import { createTaskController } from "../controllers/tasks/createTaskController"
import { updateTaskController } from "../controllers/tasks/updateTaskController"

const router = express.Router()

router.patch("/create-task/:columnId", createTaskController)
router.put("/update-task/:taskId/:columnId", updateTaskController)

export default router