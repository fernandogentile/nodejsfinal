import { Router } from "express";
import { getPeliculas, getPeliculaById, addPelicula, updatePelicula, deletePelicula} from "../controllers/peliculasController.js"

const peliculasRouter = Router();

peliculasRouter.get("/", getPeliculas);
peliculasRouter.get("/:id", getPeliculaById);
peliculasRouter.post("/", addPelicula);
peliculasRouter.patch("/:id", updatePelicula);
peliculasRouter.delete("/:id", deletePelicula);

export {peliculasRouter};