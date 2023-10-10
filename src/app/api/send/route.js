// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const { body } = await req.json();

    // Verificar si body está presente antes de desestructurarlo
    if (!body) {
      throw new Error("El cuerpo de la solicitud es nulo o indefinido.");
    }

    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["pablo_mix_16@hotmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Gracias por contactarte!</p>
          <p>Nuevo mensaje enviado:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
