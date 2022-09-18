const nodemailer = require('nodemailer')
const { templateEmail } = require('../../helpers/templateEmail')

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email, order } = req.body

  const htmlToSend = templateEmail(order)

  const contactEmail = {
    //this is the authentication for sending email.
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_TO_EMAIL,
      pass: process.env.SMTP_TO_PASSWORD,
    },
  }

  const transporter = nodemailer.createTransport(contactEmail)

  try {
    await transporter.sendMail({
      from: process.env.SMTP_TO_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Informacíon del pedido ✔', // Subject line
      text: 'texto plano en el body', // plain text body
      html: htmlToSend, // html body
    })
    res.status(200).json({
      ok: true,
      msg: 'Correo enviado correctamente',
    })
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Error en el servidor',
    })
  }
}
