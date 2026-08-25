import { transactionalEmailsApi, SendSmtpEmail } from "../config/brevoClient.js";
import { EMAIL_CONSTANTS } from "../constants/emailConstants.js";

// Thank-you email to user
export const sendContactThankYouEmail = async ({ name, email }) => {
  const sendSmtpEmail = new SendSmtpEmail();

  sendSmtpEmail.subject = EMAIL_CONSTANTS.SUBJECTS.THANK_YOU;

  sendSmtpEmail.sender = {
    name: EMAIL_CONSTANTS.SENDER.NAME,
    email: EMAIL_CONSTANTS.SENDER.EMAIL,
  };

  sendSmtpEmail.to = [{ email, name }];

  sendSmtpEmail.htmlContent = `
    <!DOCTYPE html>
    <html>
      <body style="font-family:Arial,sans-serif;background:#f9f9f9;">
        <div style="max-width:600px;margin:30px auto;background:#fff;padding:30px;border-radius:8px;">

          <p>Hi ${name},</p>

          <p>
            Thank you for reaching out! I'm
            <strong>${EMAIL_CONSTANTS.DEVELOPER_NAME}</strong>,
            a <strong>${EMAIL_CONSTANTS.DEVELOPER_ROLE}</strong>.
          </p>

          <p>
            I build fast, responsive, and user-focused web interfaces
            using modern frontend technologies.
          </p>

          <p>
            I’ll review your message and get back to you shortly.
          </p>

          <p>
            <a
              href="mailto:${EMAIL_CONSTANTS.ADMIN_EMAIL}?subject=Let’s%20Collaborate"
              style="
                display:inline-block;
                padding:12px 24px;
                background:#007BFF;
                color:#fff;
                text-decoration:none;
                border-radius:5px;
              "
            >
              Let's Collaborate
            </a>
          </p>

          <p>
            Regards,<br/>
            ${EMAIL_CONSTANTS.DEVELOPER_NAME}<br/>
            ${EMAIL_CONSTANTS.DEVELOPER_ROLE}
          </p>

        </div>
      </body>
    </html>
  `;

  return transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
};


// Notification email to admin
export const sendAdminContactNotification = async ({
  name,
  email,
  message,
}) => {
  const sendSmtpEmail = new SendSmtpEmail();

  sendSmtpEmail.subject =
    EMAIL_CONSTANTS.SUBJECTS.ADMIN_NOTIFICATION;

  sendSmtpEmail.sender = {
    name: EMAIL_CONSTANTS.CONTACT_FORM_SENDER.NAME,
    email: EMAIL_CONSTANTS.CONTACT_FORM_SENDER.EMAIL,
  };

  sendSmtpEmail.to = [
    {
      email: EMAIL_CONSTANTS.ADMIN_EMAIL,
      name: EMAIL_CONSTANTS.ADMIN_NAME,
    },
  ];

  sendSmtpEmail.htmlContent = `
    <!DOCTYPE html>
    <html>
      <body style="font-family:Arial,sans-serif;background:#f4f4f4;">

        <div style="
          max-width:600px;
          margin:30px auto;
          background:#fff;
          padding:25px;
          border-radius:8px;
        ">

          <h3>New Contact Request</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p style="
            background:#f9f9f9;
            padding:15px;
            border-radius:5px;
          ">
            ${message}
          </p>

          <p>
            <a
              href="mailto:${email}?subject=Re:%20Your%20Contact%20Request"
              style="
                display:inline-block;
                margin-top:10px;
                padding:10px 18px;
                background:#007BFF;
                color:#fff;
                text-decoration:none;
                border-radius:4px;
              "
            >
              Reply to User
            </a>
          </p>

        </div>

      </body>
    </html>
  `;

  return transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
};