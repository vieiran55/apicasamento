import ListaDePresentes from "../../models/gabieantonio/ListaDePresentes.js";

// vamos criar a classe controle para este modelo
class listaDePresentesController {
  //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarPresentes = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ListaDePresentes.find()
      .exec()
      //faremos aqui a promisse
      .then((listadepresentes) => {
        res.status(200).json(listadepresentes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarPresente = (req, res) => {
    let presente = new ListaDePresentes(req.body);
    presente
      .save()
      .then((listadepresentes) => {
        res.status(200).json(listadepresentes);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            mensagem: `${err.mensagem} - falha ao cadastrar o presente`,
          });
      });
  };

  static atualizarPresente = (req, res) => {
    const id = req.params.id;

    ListaDePresentes.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((listadepresentes) => {
      if (!listadepresentes) {
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

  static excluirPresente = (req, res) => {
    const id = req.params.id;

    ListaDePresentes.findByIdAndDelete(id)
      .then((listadepresentes) => {
        res.status(200).send({ mensagem: "Presente removido com sucesso " });
      })
      .catch((err) => {
        res.status(500).send({ mensagem: err.mensagem });
      });
  };
}

//aqui vamos exportar o controller para aplicação
export default listaDePresentesController;