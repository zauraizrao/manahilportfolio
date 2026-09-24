import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const {name, email, message} = await request.json();
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({error: 'Name, email, and message are required.'}, {status: 400});
    }

    const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS} = process.env;
    const recipient = process.env.SMTP_TO || 'manahilhassan.1230@gmail.com';
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return Response.json({error: 'Contact email service is not configured yet.'}, {status: 503});
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {user: SMTP_USER, pass: SMTP_PASS}
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || SMTP_USER,
      to: recipient,
      replyTo: email.trim(),
      subject: `New portfolio enquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    });

    return Response.json({success: true});
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({error: 'Unable to send your message right now.'}, {status: 500});
  }
}
