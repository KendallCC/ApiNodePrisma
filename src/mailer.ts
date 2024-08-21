import nodemailer from 'nodemailer';

// Configuración del servicio de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Tu correo
    pass: process.env.EMAIL_PASS  // Tu contraseña
  }
});

export const sendReminderEmail = async (to: string, subject: string, text: string) => {
  try {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

 
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
};