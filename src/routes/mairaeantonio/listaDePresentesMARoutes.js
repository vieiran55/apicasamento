import express from "express";
// importamos o controlador
import listaDePresentesMAController from "../../controllers/mairaeantonio/listaDePresentesMAController.js";

// criamos uma variavel local para receber o Router do Express
const router = express.Router();

// no router do Express, colocamos no primeiro parameto como o collection do banco. o seundo paramentro é o cotrolador+verbo
router
  .get("/listadepresentesma", listaDePresentesMAController.listarPresentesMA)
  .post("/listadepresentesma", listaDePresentesMAController.cadastrarPresenteMA)
  .put("/listadepresentesma/:id", listaDePresentesMAController.atualizarPresenteMA)
  .delete("/listadepresentesma/:id", listaDePresentesMAController.excluirPresenteMA)

//aqui exportamos essa rota que pode ser utilizada no arquivo index.
export default router;