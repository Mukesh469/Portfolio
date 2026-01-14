import { transactionalEmailsApi, SendSmtpEmail } from "../config/brevoClient.js";

// Thankyou email to user
export const sendContactThankYouEmail = async ({ name, email }) => {
    const sendSmtpEmail = new SendSmtpEmail();

    sendSmtpEmail.subject = "Thank you for contacting me – Mukesh Kumar";
    sendSmtpEmail.sender = {
        name: "Mukesh | Frontend Developer",
        email: "mukesh512004@gmail.com",
    };

    sendSmtpEmail.to = [{ email, name }];

    sendSmtpEmail.htmlContent = `
<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;background:#f9f9f9;">
    <div style="max-width:600px;margin:30px auto;background:#fff;padding:30px;border-radius:8px;">
      <p>Hi ${name},</p>

      <p>
        Thank you for reaching out! I'm <strong>Mukesh Kumar</strong>,
        a <strong>Frontend Developer</strong> at MyITROnline Global Service Pvt Ltd.
      </p>

      <p>
        I build fast, responsive, and user-focused web interfaces using modern frontend technologies.
      </p>

      <p>
        I’ll review your message and get back to you shortly.
      </p>

      <p>
        <a href="mailto:mukesh512004@gmail.com?subject=Let’s%20Collaborate"
           style="display:inline-block;padding:12px 24px;background:#007BFF;color:#fff;text-decoration:none;border-radius:5px;">
          Let's Collaborate
        </a>
      </p>

      <p>
        Regards,<br/>
        Mukesh Kumar<br/>
        Frontend Developer
      </p>
    </div>
  </body>
</html>
`;

    return transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
};

// Notification email to me (mukesh512004@gmail.com)
export const sendAdminContactNotification = async ({
    name,
    email,
    message,
}) => {
    const sendSmtpEmail = new SendSmtpEmail();

    sendSmtpEmail.subject = "📩 New Contact Form Submission From Your Personal Portfolio";
    sendSmtpEmail.sender = {
        name: "Portfolio Contact Form",
        email: "mukesh512004@gmail.com",
    };

    sendSmtpEmail.to = [
        { email: "mukesh512004@gmail.com", name: "Mukesh Kumar" },
    ];

    sendSmtpEmail.htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family:Arial,sans-serif;background:#f4f4f4;">
        <div style="max-width:600px;margin:30px auto;background:#fff;padding:25px;border-radius:8px;">
        <h3>New Contact Request</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p style="background:#f9f9f9;padding:15px;border-radius:5px;">
            ${message}
        </p>

        <p>
            <a href="mailto:${email}?subject=Re:%20Your%20Contact%20Request"
            style="display:inline-block;margin-top:10px;padding:10px 18px;background:#007BFF;color:#fff;text-decoration:none;border-radius:4px;">
            Reply to User
            </a>
        </p>
        </div>
    </body>
    </html>
    `;

    return transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
};
