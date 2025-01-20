import express from "express"
import { createBoardController } from "../controllers/boards/createBoardController"
import { getAllBoardsController } from "../controllers/boards/getAllBoardsController"
import { updateBoardController } from "../controllers/boards/updateBoardController"

const router = express.Router()

router.post("/create-board", createBoardController)
router.get("/get-all-boards", getAllBoardsController)
router.put("/update-board/:boardId", updateBoardController)

export default router