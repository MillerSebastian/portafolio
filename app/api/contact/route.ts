import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = 'sebastianrodelog@gmail.com';
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@example.com';

    await transporter.sendMail({
      from: `Portfolio Contact <${from}>`,
      to,
      subject: `[Contacto] ${subject}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family:Inter,ui-sans-serif,system-ui,Arial,sans-serif;padding:16px;background:#0b0b0b;color:#e5e7eb;">
          <h2 style="color:#10B981;margin:0 0 12px;">Nuevo mensaje desde el portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="border-color:#1f2937;margin:16px 0;" />
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
  }
}
