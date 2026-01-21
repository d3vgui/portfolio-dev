import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
console.log("USER:", process.env.EMAIL_USER)
console.log("PASS:", process.env.EMAIL_PASS ? "Senha carregada" : "SEM SENHA")

  try {
    const { name, email, message } = await request.json()

    // Configuração do Transporter para Outlook
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    })

    // Configuração do E-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `Mensagem de ${name} pelo Portfólio`,
      html: `
        <h3>Você recebeu uma nova mensagem do portfólio.</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "E-mail enviado com sucesso!" }, { status: 200 })

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ message: "Erro ao enviar e-mail." }, { status: 500 })
  }
}