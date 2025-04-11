import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const user = "prince5@ethereal.email";
const pass = "Z59Ka3A6BbR9SG5vzD";

const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
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
