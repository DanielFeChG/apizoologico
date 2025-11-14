const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animalModel");
//Nuevo animal
router.post("/animals/crear", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar animal que en su tipo contenga la palabra 'Zorro'
router.get("/animals/zorro", (req, res) => {
    animalSchema.find({$text: { $search: "Zorro" } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar animal que tenga nombre Firulais
router.get("/animals/name", (req, res) => {
    animalSchema.find({nombre: { $eq: "Firulais" } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar animal que tenga nombre desde la consulta
router.get("/animals/give-name/:nombre", (req, res) => {
    const { nombre } = req.params;
    animalSchema
        .find({nombre:{$eq:nombre}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los animales
router.get("/animals", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un animal por su id
router.get("/animals/buscar/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar animales repetidos
router.get("/animals/buscar/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un animal por su id
router.put("/animals/buscar/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un animal por su id

router.delete("/animals/buscar/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});


//Aqui pegar las demàs peticiones

module.exports = router; //Siempre dejar al final del archivo
