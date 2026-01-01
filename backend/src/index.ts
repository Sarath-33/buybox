import express from "express";
import {ENV} from "./config/env"
import { clerkMiddleware } from '@clerk/express'
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin: ENV.FRONTEND_URL, credentials: true}))
app.use(clerkMiddleware)
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", (res, req) => {
  req.json({
    message: "This is from ts express",
  });
});

app.listen(ENV.PORT,()=>{
    console.log(`Port running on ${ENV.PORT}`)
});