import nodemailer from "nodemailer";

const enviarEmail = async (destinatario, assunto, corpo) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: "casamentos@cvtrsy.online",
        pass: "@devO159118",
      },
    });

    const info = await transporter.sendMail({
      from: "casamentos@cvtrsy.online",
      to: destinatario,
      cc: "casamentos@cvtrsy.online",
      subject: assunto,
      text: corpo
    });

    console.log('E-mail enviado:', info.messageId);

  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
};

export default enviarEmail;
