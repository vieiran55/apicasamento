
// importamos o app ja configurado
import app from "./src/app.js"

// criamos uma variavel para receber a porta que será utilizada
const port = process.env.PORT || 5000;

// retornamos o log da porta q o status de como o bando está se comportando
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});