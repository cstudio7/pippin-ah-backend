import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default ({ email, subject, html }) => {
  sgMail.send({
    to: email,
    from: 'learnground2019@gmail.com',
    subject,
    html
  });
};
