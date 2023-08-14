import ListaDePresencas from "../../models/gabieantonio/ListaDePresencas.js";

// vamos criar a classe controle para este modelo
class listaDePresencasController {
    //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarPresencas = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ListaDePresencas.find()
      .exec()
      //faremos aqui a promisse
      .then((listadepresencas) => {
        res.status(200).json(listadepresencas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarPresencas = (req, res) => {
    let presencas = new ListaDePresencas(req.body);
    presencas
      .save()
      .then((listadepresencas) => {
        res.status(200).json(listadepresencas);
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
export default listaDePresencasController;