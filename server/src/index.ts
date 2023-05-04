import express from "express";
import cors from "cors";
import createFirstJob from "./routes/job/index";
import paymentIntent from "./routes/payment/index";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/job", createFirstJob);
app.use("/payment", paymentIntent);

export default app;
