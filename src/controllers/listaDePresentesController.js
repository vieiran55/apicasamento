//importamos o modelo que queremos utilizar 
import ListaDePresentes from "../models/ListaDePresentes.js";

// vamos criar a classe controle para este modelo
class listaDePresentesController {
  //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarPresentes = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ListaDePresentes
    .find()
    .exec()
    //faremos aqui a promisse
    .then(listadepresentes => {
      res.status(200).json(listadepresentes)
      })
    .catch(err => {
      console.log(err);
    });
  };
};

//aqui vamos exportar o controller para aplicação
export default listaDePresentesController;