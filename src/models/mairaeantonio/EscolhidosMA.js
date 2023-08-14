import mongoose from "mongoose";

// aqui vamos configurar o modelo das requisições ao banco, lembrado que devem ser configuradas de acordo com o que está no banco
const escolhidosMASchema = new mongoose.Schema(
  {
    nome: String,
    telefone: Number,
    email: String,
    presente: String
  }
);

//vamos isolar essa configuração de modelo, lembrando que o primeiro parametro da função modelo deve ser igual ao nome da collection no banco
const EscolhidosMA = mongoose.model("escolhidosma", escolhidosMASchema);

//exportamos a variavel para a aplicação
export default EscolhidosMA;