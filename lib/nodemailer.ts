import nodemailer from "nodemailer";

const smtpHost = process.env.MAILTRAP_SMTP_HOST;
const smtpPort = process.env.MAILTRAP_SMTP_PORT;
const smtpUser = process.env.MAILTRAP_SMTP_USER;
const smtpPass = process.env.MAILTRAP_SMTP_PASS;

if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
  throw new Error(
    "As variáveis de ambiente do SMTP não estão definidas corretamente para conexão no SMTP."
  );
}

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: Number(smtpPort),
  secure: false,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});
