import { Pelicula } from "../models/peliculaModel.js";

const getPeliculas = async (req, res) => {
  try {
    const todasLasPeliculas = await Pelicula.find();
    res.json(todasLasPeliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las películas" });
  }
};

const getPeliculaById = async (req, res) => {};

const addPelicula = async (req, res) => {
  try {
    const { body } = req;

    if (!body.filmName)
      return res
        .status(400)
        .json({ message: "El nombre del film es obligatorio" });

    if (!body.director)
      return res.status(400).json({ message: "El director es obligatorio" });

    if (!body.genero)
      return res.status(400).json({ message: "El género es obligatorio" });

    const peliculaExiste = await Pelicula.find({ filmName: body.filmName });

    if (peliculaExiste.length == 0) {
      const peliculaNueva = new Pelicula(body);
      await peliculaNueva.save();

      return res.status(200).json({ message: "Película agregada" });
    }
    else
        return res.status(409).json({message: "Esa película ya existe en la base de datos"});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al agregar la película", error: error.message });
  }
};

const updatePelicula = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const peliculaActualizada = await Pelicula.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!peliculaActualizada)
      return res
        .status(404)
        .json({ message: "Película a actualizar no encontrada." });

    res
      .status(200)
      .json({ message: "Película actualizada", peliculaActualizada });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la película",
      error: error.message,
    });
  }
};

const deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const peliculaBorrada = await Pelicula.findByIdAndDelete(id);

    if (!peliculaBorrada)
      return res
        .status(404)
        .json({ message: "Película a eliminar no encontrada." });

    return res.status(200).json({ message: "Película eliminada." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la película", error: error.message });
  }
};

export {
  getPeliculas,
  getPeliculaById,
  addPelicula,
  updatePelicula,
  deletePelicula,
};
