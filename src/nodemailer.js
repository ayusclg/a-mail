import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // or 465 for SSL
  secure: false, // Use TLS

  auth: {
    user,
    pass,
  },
});

const sendmail = async ({ to, html, subject, text }) => {
  const mailOptions = {
    from: user,
    to,
    html,
    subject,
    text,
  };
  try {
    const info = await transport.sendMail(mailOptions);
    console.log(info.response);
    return info;
  } catch (error) {
    console.log("error in sending mail", error);
  }
};
export { sendmail };
