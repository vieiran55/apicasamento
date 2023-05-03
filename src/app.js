// aqui eu importo express para nossa aplicação, que é o inicio de tudo
import express from 'express';
//aqui configuramos a conexão com o banco de dados
import db from "./cfg/dbConnect.js";
//aqui importamos as rotas que serão configuradas no index.js
import routes from "./routes/index.js"
// ferramenta para permitir ao servidor node que receba solicitações
import cors from "cors";
// aqui eu crio uma constante que vai receber a base do express
const app = express()
// como importamos a conexão do banco vamos configurar a sua utilização.
db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
});

//acrescentar cors ao express
app.use(cors())
// aqui vamos configurar para que as requisições em formato JSON
app.use(express.json());
// aqui colocamos o express para se conectar com as rotas
routes(app);
// com o app configurado, vamos exporta-lo para ser utilizado em toda a aplicação.
export default app;


