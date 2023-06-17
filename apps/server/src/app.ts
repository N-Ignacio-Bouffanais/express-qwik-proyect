import express from "express";
import morgan from "morgan";
import "dotenv/config";
import { users_router } from "./routes/users";


const PORT = process.env.PORT || 3001;


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", users_router);


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));