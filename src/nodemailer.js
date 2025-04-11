import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "",
  auth: {
    user: "",
    pass: "",
  },
});

const sendmail = async (to, html, subject, message) => {
  const mailOptions = {
    to,
    from: user,
    html,
    subject,
    message,
  };
  try {
    const info = await transport.sendMail(mailOptions);
    console.log(info.response);
  } catch (error) {
    console.log("error in sending mail", error);
  }
};
export { sendmail };
