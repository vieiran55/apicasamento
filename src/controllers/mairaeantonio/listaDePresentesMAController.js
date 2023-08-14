
import ListaDePresentesMA from "../../models/mairaeantonio/ListaDePresentesMA.js";

// vamos criar a classe controle para este modelo
class listaDePresentesMAController {
  //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarPresentesMA = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ListaDePresentesMA.find()
      .exec()
      //faremos aqui a promisse
      .then((listadepresentesma) => {
        res.status(200).json(listadepresentesma);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarPresenteMA = (req, res) => {
    let presente = new ListaDePresentesMA(req.body);
    presente
      .save()
      .then((listadepresentesma) => {
        res.status(200).json(listadepresentesma);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            mensagem: `${err.mensagem} - falha ao cadastrar o presente`,
          });
      });
  };

  static atualizarPresenteMA = (req, res) => {
    const id = req.params.id;

    ListaDePresentesMA.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((listadepresentesma) => {
      if (!listadepresentesma) {
        return res.status(404).send({ message: "Registro não encontrado" });
      }
      res.status(200).json({ message: "Presente atualizado com sucesso" });
    })
    .catch((err) => {
      res.status(500).send({
        mensagem: `${err.mensagem} - falha ao atualizar o presente`,
      });
    });
}

  static excluirPresenteMA = (req, res) => {
    const id = req.params.id;

    ListaDePresentesMA.findByIdAndDelete(id)
      .then((listadepresentesma) => {
        res.status(200).send({ mensagem: "Presente removido com sucesso " });
      })
      .catch((err) => {
        res.status(500).send({ mensagem: err.mensagem });
      });
  };
}

//aqui vamos exportar o controller para aplicação
export default listaDePresentesMAController;