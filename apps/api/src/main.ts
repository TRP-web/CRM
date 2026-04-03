import express from "express"
import cors from "cors"
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello Express 🚀")
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API" })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})