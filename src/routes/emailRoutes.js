import express from 'express';
const router = express.Router();
import enviarEmail  from '../controllers/emailController.js';

// Rota para enviar o email de confirmação
router.get('/enviar-email', (req, res) => {
  const destinatario = req.query.destinatario; // Obtém o destinatário do query parameter ou do corpo da requisição, dependendo de como você está enviando o valor
  const assunto = req.query.assunto;
  const corpo = req.query.corpo;

  enviarEmail(destinatario, assunto, corpo)
    .then(() => {
      res.send('E-mail enviado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail');
    });
});

export default router;