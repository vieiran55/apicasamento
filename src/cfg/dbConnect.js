// aqui importamos o mongose para que facilite as conexões com o banco para gente
import mongoose from "mongoose";

// passamos o mogoose mais a forma de conexão

//conexão com o banco local
mongoose.connect("mongodb://127.0.0.1:27017/alura-node");

//conexão com o banco no Atlas
//mongoose.connect("mongodb+srv://alura:15911@cluster0.bbho8n.mongodb.net/alura-node?retryWrites=true&w=majority");

// vamos encapsular essa conexão em uma variavel
let db = mongoose.connection;
//vamos exportar essa variavel para aplicação
export default db;