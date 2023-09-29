import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { ConnectMongoDB } from "../database/conectDatabase.js"
import routerFilmes from "./routes/route.js"


dotenv.config()

const port=process.env.MONGODB_PORT

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/", routerFilmes)

ConnectMongoDB()


app.listen(port || 3000)