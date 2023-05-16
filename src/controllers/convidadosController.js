import Convidados from "../models/Convidados.js";

// vamos criar a classe controle para este modelo
class convidadosController {
    //passamos a base estatica com o verbo do CRUD
  //aqui faremos o READ ou gEt
  static listarConvidados = (req, res) => {
    // aqui recebemos o modelo e passamos as function
    Convidados.find()
      .exec()
      //faremos aqui a promisse
      .then((convidados) => {
        res.status(200).json(convidados);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static cadastrarConvidados = (req, res) => {
    let convites = new Convidados(req.body);
    convites
      .save()
      .then((convidados) => {
        res.status(200).json(convidados);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            mensagem: `${err.mensagem} - falha ao cadastrar o presente`,
          });
      });
  };

  
  static atualizarConvidado = (req, res) => {
    const id = req.params.id;

    Convidados.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((convidados) => {
      if (!convidados) {
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

static excluirConvidado = (req, res) => {
  const id = req.params.id;

  Convidados.findByIdAndDelete(id)
    .then((convidados) => {
      res.status(200).send({ mensagem: "Convidado removido com sucesso " });
    })
    .catch((err) => {
      res.status(500).send({ mensagem: err.mensagem });
    });
};
}

//aqui vamos exportar o controller para aplicação
export default convidadosController;