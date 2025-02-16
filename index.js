import express from "express";
import { peliculasRouter } from "./routes/peliculasRouter.js";
import cors from "cors"
import { connectDB } from "./config/conectDB.js";

process.loadEnvFile();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/peliculas", peliculasRouter);

app.listen(PORT, () => {
    console.log("Server escuchando por http://localhost:" + PORT);
    connectDB();
});