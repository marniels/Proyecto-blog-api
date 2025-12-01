const express = require("express");
const { pool } = require("../db");

const router = express.Router();

// Obtener todos los posts con info del autor
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT posts.*, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen
      FROM posts
      JOIN autores ON autores.id = posts.autor_id
    `);

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener posts" });
  }
});

// Crear un post
router.post("/", async (req, res) => {
  try {
    const { titulo, descripcion, categoria, autor_id } = req.body;

    await pool.query(
      "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)",
      [titulo, descripcion, categoria, autor_id]
    );

    res.json({ mensaje: "Post creado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al crear post" });
  }
});

// Obtener un post por ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(
      `SELECT posts.*, autores.nombre, autores.email, autores.imagen
       FROM posts
       JOIN autores ON posts.autor_id = autores.id
       WHERE posts.id = ?`,
      [id]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener post" });
  }
});

module.exports = router;