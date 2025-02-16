import mongoose from "mongoose";

const peliculaSchema = new mongoose.Schema(
    {
        filmName : {
            type: String,
            require: true,
            trim: true
        },
        director : {
            type: String,
            require: true,
            trim: true            
        },
        genero : {
            type: String,
            require: true,
            trim: true            
        }
    },
    {
        versionKey: false,
    }
);

const Pelicula = mongoose.model("Peliculas", peliculaSchema);

export { Pelicula };