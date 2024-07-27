import express from 'express';
import { prisma } from './prismaClient'

const cors = require('cors');


// Types
import type { Express, Request, Response } from 'express';

// Routers 
import  { userRouter } from "./src/routes/user"
import  { ContentRouter } from "./src/routes/content"



//Express App
const app: Express = express();



// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/users", userRouter)
app.use("/content", ContentRouter)

// Server
const server = app.listen(3000, ():void => {
    console.log("Server is running on port 3000");
});

const gracefulShutdown = async () => {
    await prisma.$disconnect();
    server.close(() => {
    console.log("Yaycha API closed.");
    process.exit(0);
    });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
