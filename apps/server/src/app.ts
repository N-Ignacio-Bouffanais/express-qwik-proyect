import express from "express";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import { indexRouter } from "./api/index.router";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../..', 'client', 'dist')))

app.use("/api", indexRouter);


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));