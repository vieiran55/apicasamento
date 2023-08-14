import mongoose from "mongoose";

// aqui vamos configurar o modelo das requisições ao banco, lembrado que devem ser configuradas de acordo com o que está no banco
const listaDePresentesMASchema = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  photo: String,
  status: String,
  price: Number
});

//vamos isolar essa configuração de modelo, lembrando que o primeiro parametro da função modelo deve ser igual ao nome da collection no banco
const ListaDePresentesMA = mongoose.model("listadepresentesma", listaDePresentesMASchema);

//exportamos a variavel para a aplicaçãp
export default ListaDePresentesMA;