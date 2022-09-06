const { sendEmail } = require("../config/auth");

const sendEmailController = async (req, res) => {
  try {
    const body = {
      from: process.env.EMAIL_USER,
      to: `${req.body.email}`,
      subject: `${req.body.subject}`,
      html: `<h2>Hello ${req.body.email}</h2>
      <p>${req.body.message}</p>

        <p style="margin-bottom:0px;">Thank you</p>
        <strong>${req.body.name}</strong>
             `,
    };

    const message = "Please check your email!";
    sendEmail(body, res, message);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = { sendEmailController };
