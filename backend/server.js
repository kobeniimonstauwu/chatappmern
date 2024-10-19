import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import express from 'express'
import connectToMongoDB from './db/connectToMongoDB.js'


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { app, server } from './socket/socket.js'


dotenv.config()


const PORT = process.env.PORT || 5000



// The Middlewares are "app.use"

app.use(express.json()) //Parses json payloads (From req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//     //root route http://locahost:5000/
//     res.send("Hello Worlds")
// })


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
})