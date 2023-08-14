import ListaDePresencasMA from "../../models/mairaeantonio/ListaDePresencasMA.js";

// vamos criar a classe controle para este modelo
class listaDePresencasMAController {
    //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarPresencasMA = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ListaDePresencasMA.find()
      .exec()
      //faremos aqui a promisse
      .then((listadepresencasMA) => {
        res.status(200).json(listadepresencasMA);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarPresencasMA = (req, res) => {
    let presencas = new ListaDePresencasMA(req.body);
    presencas
      .save()
      .then((listadepresencasma) => {
        res.status(200).json(listadepresencasma);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            mensagem: `${err.mensagem} - falha ao cadastrar o presente`,
          });
      });
  };
}

//aqui vamos exportar o controller para aplicação
export default listaDePresencasMAController;