import express from "express"
import { createBoardController } from "../controllers/boards/createBoardController"
import { getAllBoardsController } from "../controllers/boards/getAllBoardsController"

const router = express.Router()

router.post("/create-board", createBoardController)
router.get("/get-all-boards", getAllBoardsController)

export default router