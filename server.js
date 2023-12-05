import express, { urlencoded } from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.VITE_PORT || 8080;
import indexRouter from "./routes/index.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`You are Live on http://localhost:${PORT}`);
});
