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
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

console.log(mailOptions);


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
};




//mlsn.f3665666e683ded4b6dfe3f8f542e08c04fad3cfa4ce5f9220229352dd6ff921