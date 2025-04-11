import { sendmail } from "./nodemailer.js";

const send = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    const sendamail = await sendmail({
      to,
      subject,
      message,
    });
    if (!sendamail) {
      return res.status(400).json({
        message: "Mail not send",
      });
    }
    res.status(200).json({
      message: "Mail Send",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error In Send",
    });
  }
};

export { send };
