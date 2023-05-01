import express from "express";
import routes from "./src/index";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

app.listen(8000);
