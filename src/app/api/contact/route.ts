import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

const POST = async (request: any) => {
    try {
        const { name, email, number, message } = await request.json();

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
                ${name}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px;">Email :</th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px;">
                ${email}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px;">Phone Number
                  :</th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px;">
                ${number}
                </td>
              </tr>
              <tr>
                <th bgcolor="#ffffff" align="left" style="width: 27%; padding: 10px 20px 50px; ">Message :
                </th>
                <td bgcolor="#ffffff" align="left" style="padding: 10px 20px 50px;">
                  ${message}
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
</table>`;

        const transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user,
                pass,
            },
        });

        const mailOptions = {
            from: user,
            to: "admin@apsthreeai.ai",
            subject: "Contact Us",
            text: "Name : " + name + " Email: " + email,
            html: emailBody,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse("Failed to send message.", { status: 500 });
    }
};

const GET = async () => {
    return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
    );
};

export { GET, POST };
