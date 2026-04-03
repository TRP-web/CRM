import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors({
    origin: "http://localhost"
}))

app.get("/", (req, res) => {
  res.send("Hello Express 🚀")
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API" })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})