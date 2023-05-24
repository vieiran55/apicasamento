
// importamos o app ja configurado
import app from "./src/app.js"
//importamos o pacote https
import https from "https";
//importamos o pacote fs
import fs from "fs";

// criamos uma variavel para receber a porta que será utilizada
const port = process.env.PORT || 3000;

// retornamos o log da porta q o status de como o bando está se comportando
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

// aqui passamos o https para saida do nosso servidor, configurando as key SSL emetidas pelo certbot
https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/live/cvtrsy.online/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/cvtrsy.online/privkey.pem')
}, app).listen(3001, () => console.log("rodando em https"));