// controllers/contactController.js
import Contact from '../models/Contact.js';
import SibApiV3Sdk from 'sib-api-v3-sdk';

// Setup Brevo API client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();


export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Prepare transactional email
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Thank you for contacting us!";

    sendSmtpEmail.htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f9f9f9;
          color: #333;
          padding: 0;
          margin: 0;
        }
        .container {
          max-width: 600px;
          margin: 30px auto;
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          font-size: 17px;
          line-height: 1.6;
        }
        h3 {
          color: #007BFF;
          margin-top: 25px;
        }
        ul {
          padding-left: 20px;
        }
        ul li {
          margin-bottom: 8px;
        }
        a.button {
          display: inline-block;
          margin-top: 20px;
          background-color: #007BFF;
          color: white !important;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <p>Hi ${name},</p>

        <p>Thank you for reaching out! I'm <strong>Mukesh Kumar</strong>, a Full Stack Developer at MyITROnline Global Service Pvt Ltd. I build fast, responsive, and scalable web applications from front to back.</p>

        <h3>I specialize in:</h3>
        <ul>
          <li><strong>Frontend:</strong> React.js, HTML5, CSS3, Bootstrap, Tailwind CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
          <li><strong>Database:</strong> MySQL, MongoDB</li>
          <li><strong>Version Control:</strong> Git &amp; GitHub</li>
          <li><strong>UI/UX & Animation:</strong> Framer Motion</li>
        </ul>

        <p>Whether you need a sleek frontend, a strong backend, or a complete web solution — I’d love to hear more about your project and see how I can help.</p>

        <p style="text-align:left;">
          <a href="mailto:heyiamfrom2025@gmail.com?subject=Let’s%20Collaborate" class="button">Let's Collaborate</a>
        </p>

        <p>Best regards,<br/>
        Mukesh Kumar<br/>
        Full Stack Developer<br/>
        <a href="mailto:heyiamfrom2025@gmail.com">heyiamfrom2025@gmail.com</a></p>
      </div>
    </body>
  </html>
`;

    sendSmtpEmail.sender = { name: "Mukesh|Web Developer", email: "heyiamfrom2025@gmail.com" };
    sendSmtpEmail.to = [{ email, name }];


    // Send email
    await transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);

    return res
      .status(201)
      .json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Server error', error: error.message });
  }
};
