var nodemailer = require("nodemailer");

export default async function handler(req, res) {
  try {
    const emailBody = `<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#0162C8" align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#0162C8" align="center" style="padding: 0px 10px 0px 10px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top"
            style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
            <h1 style="font-size: 48px; font-weight: 400; margin: 10px 0;">Contact Us</h1>
            <div>

            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#f0f6fb" align="center" style="padding: 0px 10px 0px 10px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px;">Name :</th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px;">
                ${req.body.name}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px;">Email :</th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px;">
                ${req.body.email}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px;">Phone Number
                  :</th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px;">
                ${req.body.number}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px 50px; ">Message :
                </th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px 50px;">
                  ${req.body.query}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#f0f6fb" align="center" style="padding: 30px 10px 0px 10px;">
    </td>
  </tr>
</table>`

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "admin@apsthreeai.ai",
        pass: "Apsthreeeai@123",
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: "admin@apsthreeai.ai",
      subject: "Contact Us",
      text: "Name : " + req.body.name + " Email: " + req.body.email,
      html: emailBody,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res
          .status(error.statusCode || 500)
          .json({ status: false, error: error.message });
      } else {
        console.log("Email Sent");
        return res.status(200).json({ status: true, error: "" });
      }
    });
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ staus: false, error: error.message });
  }
}
