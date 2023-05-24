import Escolhidos from "../models/Escolhidos.js";

class escolhidosController {


  //passamos a base estatica com o verbo do CRUD
//aqui faremos o READ ou gEt
static listarEscolhidos = (req, res) => {
  // aqui recebemos o modelo e passamos as function
  Escolhidos.find()
    .exec()
    //faremos aqui a promisse
    .then((escolhidos) => {
      res.status(200).json(escolhidos);
    })
    .catch((err) => {
      console.log(err);
    });
};


static cadastrarEscolhidos = (req, res) => {
  let escolhas = new Escolhidos(req.body);
  escolhas
    .save()
    .then((escolhidos) => {
      res.status(200).json(escolhidos);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          mensagem: `${err.mensagem} - falha ao cadastrar o presente escolhido`,
        });
    });
};

}

//aqui vamos exportar o controller para aplicação
export default escolhidosController;