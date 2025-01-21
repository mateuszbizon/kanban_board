import express from 'express'
import { updateSubtaskController } from '../controllers/subtasks/updateSubtaskController'

const router = express.Router()

router.patch("/update-subtask/:subtaskId", updateSubtaskController)

export default router