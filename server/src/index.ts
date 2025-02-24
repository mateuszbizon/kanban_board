import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import errorHandler from "./middlewares/errorHandler"
import boardRoutes from "./routes/boardRoutes"
import taskRoutes from "./routes/taskRoutes"
import subtaskRoutes from "./routes/subtaskRoutes"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.use("/boards", boardRoutes)
app.use("/tasks", taskRoutes)
app.use("/subtasks", subtaskRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app