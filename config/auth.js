const nodemailer = require("nodemailer");

const createTransporter = async () => {
  // cnbeta@mail.cubenationshop.com
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
};

const sendEmail = async (body, res, message) => {
  try {
    // console.log(process.env.EMAIL);
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail({
      subject: body.subject,
      html: body.html,
      to: body.to,
      from: body.from || process.env.EMAIL,
    });

    res.json({
      message: "mail send successfully",
    });
  } catch (err) {
    // console.log("here", err);
    res.status(500).json({
      err: err.message,
    });
  }
};

module.exports = {
  sendEmail,
};
