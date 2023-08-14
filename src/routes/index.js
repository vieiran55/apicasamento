
// aqui eu importo express
import express from 'express';

// aqui importamos a segunda rota ou mais rotas que serão filhas desta
import listaDePresentes from "./gabieantonio/listaDePresentesRoutes.js";
import listaDePresencas from './gabieantonio/listaDePresencasRoutes.js';
import convidados from './gabieantonio/convidadosRoutes.js';
import escolhidos from './gabieantonio/escolhidosRoutes.js';
import emailRoutes from './emailRoutes.js';


/// casamento maria e antonio

import convidadosma from './mairaeantonio/convidadosMARoutes.js';
import listaDePresencasMA from './mairaeantonio/listaDePresencasRoutesMA.js';
import listaDePresentesMA from "./mairaeantonio/listaDePresentesMARoutes.js";
import escolhidosMA from './mairaeantonio/escolhidosMARoutes.js';

//criamos uma variavel para receber os paramentros
const routes = (app) =>{
  // aqui eu designo o / como lugar inicial da aplicação, passou 2 atributos, um para fazer a requição ou outro para resposta
  app.route("/").get((req, res) => {
    // se a resposta for 200 enviamos o sengudo paramentro
    res.status(200).send({ titulo: 'API do casamento de Gabriela e Antonio'});
  });

  // // aqui vamos configurar para que as requisições em formato JSON para as rotas filhas
  app.use(express.json(), listaDePresencas, listaDePresentes, convidados, escolhidos);
  // aqui seria como em um servidor html onde ficam os aquivos publicos, é importante manter essa linha.

  app.use(express.json(), convidadosma, listaDePresencasMA,listaDePresentesMA, escolhidosMA);

  app.use(emailRoutes);

  app.use(express.static("public"));
}

//exportamos as rotas para a aplicação que deve ser incluida no aquivo app.js
export default routes;