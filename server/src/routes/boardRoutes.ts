import express from "express"
import { createBoardController } from "../controllers/boards/createBoardController"

const router = express.Router()

router.post("/create-board", createBoardController)

export default router