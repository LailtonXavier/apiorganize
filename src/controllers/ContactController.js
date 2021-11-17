import nodemailer from 'nodemailer';
import Contact from '../models/Contact';

class ContactController {
  async index(req, res) {
    try {
      const contacts = await Contact.findAll({ attributes: ['id', 'name', 'email', 'message'] });

      return res.json(contacts);
    } catch (e) {
      return res.json(e);
    }
  }

  async store(req, res) {
    try {
      const data = await Contact.create(req.body);

      return res.json(data);
    } catch (e) {
      return res.status(400).json({ e });
    }
  }

  async sendEmail(req, res) {
    try {
      const contacts = await Contact.create(req.body);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lailtonxavierofc@gmail.com',
          pass: 'YouBbLau0074002',
        },
      });

      const mailOptions = {
        from: 'Lailton <lailtonxavierofc@gmail.com',
        to: `${contacts.email}`,
        // replyTo: 'lailton@lailtonnx.com.br',
        subject: `${contacts.name} is seinding`,
        text: `${contacts.message}`,
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });

      // console.log('Message sent: %s', info.messageId);

      return res.json(contacts);
    } catch (e) {
      return res.status(400).json(
        'errors to send msg',
      );
    }
  }
}
export default new ContactController();
