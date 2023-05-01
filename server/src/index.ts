import express from "express";
import createFirstJob from "./routes/job/index";
const app = express();

app.use("/job", createFirstJob);

export default app;
