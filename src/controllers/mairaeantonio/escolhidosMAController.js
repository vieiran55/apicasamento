
import EscolhidosMA from "../../models/mairaeantonio/EscolhidosMA.js";

class escolhidosMAController {


  //passamos a base estatica com o verbo do CRUD
//aqui faremos o READ ou gEt
static listarEscolhidosMA = (req, res) => {
  // aqui recebemos o modelo e passamos as function
  EscolhidosMA.find()
    .exec()
    //faremos aqui a promisse
    .then((escolhidosma) => {
      res.status(200).json(escolhidosma);
    })
    .catch((err) => {
      console.log(err);
    });
};


static cadastrarEscolhidosMA = (req, res) => {
  let escolhas = new EscolhidosMA(req.body);
  escolhas
    .save()
    .then((escolhidosma) => {
      res.status(200).json(escolhidosma);
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
export default escolhidosMAController;



