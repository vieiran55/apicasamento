import express from "express";
// importamos o controlador
import convidadosController from "../controllers/convidadosController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o segundo paramentro é o cotrolador+verbo
router
  .get("/convidados", convidadosController.listarConvidados)
  .post("/convidados", convidadosController.cadastrarConvidados)
  .put("/convidados/:id", convidadosController.atualizarConvidado)
  .delete("/convidados/:id", convidadosController.excluirConvidado)
//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;