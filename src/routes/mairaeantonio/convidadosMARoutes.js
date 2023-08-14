import express from "express";
// importamos o controlador
import convidadosMAController from "../../controllers/mairaeantonio/convidadosMAController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o segundo paramentro é o cotrolador+verbo
router
  .get("/convidadosma", convidadosMAController.listarConvidadosMA)
  .post("/convidadosma", convidadosMAController.cadastrarConvidadosMA)
  .put("/convidadosma/:id", convidadosMAController.atualizarConvidadoMA)
  .delete("/convidadosma/:id", convidadosMAController.excluirConvidadoMA)
//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;