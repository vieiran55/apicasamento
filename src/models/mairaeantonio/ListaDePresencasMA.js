import mongoose from "mongoose";

// aqui vamos configurar o modelo das requisições ao banco, lembrado que devem ser configuradas de acordo com o que está no banco
const listaDePresencasMASchema = new mongoose.Schema(
  {
    nome: String,
    qtd: Number,
    pessoas: Array
  }
);

//vamos isolar essa configuração de modelo, lembrando que o primeiro parametro da função modelo deve ser igual ao nome da collection no banco
const ListaDePresencasMA = mongoose.model("listadepresencasma", listaDePresencasMASchema);

//exportamos a variavel para a aplicação
export default ListaDePresencasMA;