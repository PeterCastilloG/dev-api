const test = require("./router/test")
const express = require("express")
const cors = require("cors")

const servidor = express();
const PORT = 3000;


servidor.use(cors())
servidor.use(express.json());
servidor.use(test);


servidor.listen(PORT, async () => {
  console.log(`Servidor Iniciado Correctamente :  http://localhost:${PORT}/`);
});
