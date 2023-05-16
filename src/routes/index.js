
// aqui eu importo express
import express from 'express';

// aqui importamos a segunda rota ou mais rotas que serão filhas desta
import listaDePresentes from "./listaDePresentesRoutes.js";
import listaDePresencas from './listaDePresencasRoutes.js';
import convidados from './convidadosRoutes.js';

//criamos uma variavel para receber os paramentros
const routes = (app) =>{
  // aqui eu designo o / como lugar inicial da aplicação, passou 2 atributos, um para fazer a requição ou outro para resposta
  app.route("/").get((req, res) => {
    // se a resposta for 200 enviamos o sengudo paramentro
    res.status(200).send({ titulo: 'Que bom que vc chegou aqui sera!'});
  });

  // // aqui vamos configurar para que as requisições em formato JSON para as rotas filhas
  app.use(express.json(), listaDePresencas, listaDePresentes, convidados);
  // aqui seria como em um servidor html onde ficam os aquivos publicos, é importante manter essa linha.
  app.use(express.static("public"));
}

//exportamos as rotas para a aplicação que deve ser incluida no aquivo app.js
export default routes;