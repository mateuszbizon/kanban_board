import express from "express"
import { createTaskController } from "../controllers/tasks/createTaskController"

const router = express.Router()

router.patch("/create-task/:columnId", createTaskController)

export default router