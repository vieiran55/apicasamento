import express from "express";
// importamos o controlador
import listaDePresencasMAController from "../../controllers/mairaeantonio/listaDePresencasMAController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o segundo paramentro é o cotrolador+verbo
router
  .get("/listadepresencasma", listaDePresencasMAController.listarPresencasMA)
  .post("/listadepresencasma", listaDePresencasMAController.cadastrarPresencasMA)
//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;