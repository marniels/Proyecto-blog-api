const express = require("express");
const postsRouter = require("./routes/posts");
const autoresRouter = require("./routes/autores");

const app = express();

app.use(express.json());

// Rutas del API
app.use("/api/posts", postsRouter);
app.use("/api/autores", autoresRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});