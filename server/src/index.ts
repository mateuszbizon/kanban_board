import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import errorHandler from "./middlewares/errorHandler"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:5173"],
}))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app