import express from "express";
// importamos o controlador
import escolhidosMAController from "../../controllers/mairaeantonio/escolhidosMAController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o segundo paramentro é o cotrolador+verbo
router
  .get("/escolhidosma", escolhidosMAController.listarEscolhidosMA)
  .post("/escolhidosma", escolhidosMAController.cadastrarEscolhidosMA)
//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;