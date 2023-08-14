import express from "express";
// importamos o controlador
import listaDePresencasController from "../../controllers/gabieantonio/listaDePresencasController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o segundo paramentro é o cotrolador+verbo
router
  .get("/listadepresencas", listaDePresencasController.listarPresencas)
  .post("/listadepresencas", listaDePresencasController.cadastrarPresencas)
//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;