const express = require("express");
const { pool } = require("../db");

const router = express.Router();

// Obtener todos los autores
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM autores");
    res.json(rows);
  } catch (err) {
    console.error("Error en GET /api/autores:", err);   // 👈 línea nueva
    res.status(500).json({ error: "Error al obtener autores" });
  }
});

// Crear un autor
router.post("/", async (req, res) => {
  try {
    const { nombre, email, imagen } = req.body;

    await pool.query(
      "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
      [nombre, email, imagen]
    );

    res.json({ mensaje: "Autor creado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al crear autor" });
  }
});

// Obtener posts de un autor concreto
router.get("/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      `SELECT posts.*, autores.nombre, autores.email, autores.imagen
       FROM posts
       JOIN autores ON posts.autor_id = autores.id
       WHERE autores.id = ?`,
      [id]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener posts del autor" });
  }
});

module.exports = router;