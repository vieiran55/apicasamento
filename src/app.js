// aqui eu importo express para nossa aplicação, que é o inicio de tudo
import express from 'express';
//aqui configuramos a conexão com o banco de dados
import db from "./cfg/dbConnect.js";
//aqui importamos as rotas que serão configuradas no index.js
import routes from "./routes/index.js"
// ferramenta para permitir ao servidor node que receba solicitações
import cors from "cors";

import nodemailer from "nodemailer";

// aqui eu crio uma constante que vai receber a base do express
const app = express()
// como importamos a conexão do banco vamos configurar a sua utilização.
db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso")
});


// envio de email 

// const transporter  = nodemailer.createTransport({
//   host: "smtp.hostinger.com",
//   port: 465,
//   auth: {
//     user: "mariaeantonio@cvtrsy.online",
//     pass: "@devO159118",
//   },
// })

// // Função para enviar um e-mail
// const enviarEmail = async (destinatario, assunto, corpo) => {
//   try {
//     const info = await transporter.sendMail({
//       from: "mariaeantonio@cvtrsy.online", // Insira o seu endereço de e-mail do Gmail
//       to: destinatario,
//       subject: assunto,
//       text: corpo
//     });

//     console.log('E-mail enviado:', info.messageId);
//   } catch (error) {
//     console.error('Erro ao enviar o e-mail:', error);
//   }
// };

// app.get('/enviar-email', (req, res) => {
//   const destinatario = 'vieira.n55@gmail.com';
//   const assunto = 'Testando email';
//   const corpo = 'O email foi entregue com sucesso.';

//   enviarEmail(destinatario, assunto, corpo);

//   res.send('E-mail enviado com sucesso!');
// });

// com base no video do amigo do ytb mas caiu no spam

// const configEmail = {
//   from: "mariaeantonio@cvtrsy.online",
//   to: "vieira.n55@gmail.com",
//   subject: "Testanto",
//   html: "<p> testanto o tteste tesadato terere, <strong> tu é pica </strong></p>"
// }

// new Promise ((resolve, reject) => {
//   smtp
//     .sendMail(configEmail)
//     .then((res) => {
//       smtp.close();
//       return resolve(res);
//     })
//     .catch()
// })


//acrescentar cors ao express
app.use(cors())
// aqui vamos configurar para que as requisições em formato JSON
app.use(express.json());
// aqui colocamos o express para se conectar com as rotas
routes(app);
// com o app configurado, vamos exporta-lo para ser utilizado em toda a aplicação.

export default app;


