import ConvidadosMA from "../../models/mairaeantonio/ConvidadosMA.js";

// vamos criar a classe controle para este modelo
class convidadosMAController {
    //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarConvidadosMA = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    ConvidadosMA.find()
      .exec()
      //faremos aqui a promisse
      .then((convidados) => {
        res.status(200).json(convidados);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarConvidadosMA = (req, res) => {
    let convites = new ConvidadosMA(req.body);
    convites
      .save()
      .then((convidadosma) => {
        res.status(200).json(convidadosma);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            mensagem: `${err.mensagem} - falha ao cadastrar convidado`,
          });
      });
  };

  
  static atualizarConvidadoMA = (req, res) => {
    const id = req.params.id;

    ConvidadosMA.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((convidadosma) => {
      if (!convidadosma) {
        return res.status(404).send({ message: "Registro não encontrado" });
      }
      res.status(200).json({ message: "convidado atualizado com sucesso" });
    })
    .catch((err) => {
      res.status(500).send({
        mensagem: `${err.mensagem} - falha ao atualizar o convidado`,
      });
    });
}

static excluirConvidadoMA = (req, res) => {
  const id = req.params.id;

  ConvidadosMA.findByIdAndDelete(id)
    .then((convidadosma) => {
      res.status(200).send({ mensagem: "Convidado removido com sucesso " });
    })
    .catch((err) => {
      res.status(500).send({ mensagem: err.mensagem });
    });
};
}

//aqui vamos exportar o controller para aplicação
export default convidadosMAController;